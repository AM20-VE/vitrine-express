const Anthropic = require('@anthropic-ai/sdk');
exports.handler = async (event, context) => {
    console.log("Function ask-claude appelée");
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
    try {
         console.log("Body brut reçu :", event.body);
        const userData = JSON.parse(event.body);
        console.log("Body parsé :", userData);
// --- 1. Extraction et Valeurs par défaut ---
        const email = userData.email || "";
        const mode = userData.mode || "full";
        const expertise = userData.expertise || "Professionnel";
        const benefice = userData.benefice || "Offre de valeur unique";
        const probleme = userData.probleme || "Problème du client à résoudre";
        const servicesFournis = userData.services || [];
        const style = userData.style || "convaincant, clair et persuasif";
        const contact = userData.contact || "contact";
        const diffValue = userData.differenciation || "élément différenciateur";
        if (!email.includes("@")) {
            return { 
                statusCode: 403, 
                body: JSON.stringify({ error: "Accès refusé : Email invalide." }) 
            };
        }
// --- 2. Préparation des blocs d'instructions dynamiques ---
        const servicesText = servicesFournis.length ? servicesFournis.join(', ') : "aucun service fourni";
        const faqInstruction = (userData.doutes === "UNKNOWN")
            ? `L'utilisateur ne connaît pas les doutes de ses clients. Génère 5 questions/réponses probables pour lever les freins à l'achat pour un ${expertise}.`
            : `Rédige 5 questions/réponses basées sur les doutes suivants : ${Array.isArray(userData.doutes) ? userData.doutes.join(', ') : userData.doutes}.`;
        const servicesInstruction = `IMPORTANT : Tu dois impérativement générer 3 items de services (H3 et P). 
          Si l'utilisateur n'a fourni qu'un seul ("${servicesText}"), décline-le en 3 offres complémentaires, 3 étapes de sa méthode, ou 3 bénéfices distincts. 
          Chaque carte doit être unique, vendeuse, et répondre au problème : "${probleme}".`;
        const diffInstruction = (diffValue === "UNKNOWN") 
            ? `L'utilisateur ne connaît pas sa différenciation. Analyse son métier (${expertise}) et son bénéfice pour en déduire un avantage concurrentiel unique et crédible.` 
            : `Utilise cet élément de différenciation : "${diffValue}".`;
// --- 3. Construction du System Prompt avec les variables incluses ---
        const systemPrompt = `Tu es un stratège en Copywriting d'élite, expert en Psychologie de la Vente (CRO) et SEO. 
Ton client est un ${expertise} dont la proposition de valeur repose sur : ${benefice}.
Ton objectif : créer un tunnel textuel persuasif menant à une conversion immédiate (${contact}).

DIRECTIVES GÉNÉRALES STRICTES :
- Style : ${style}
- Langue : Français impeccable.
- INTERDICTION FORMELLE : N'utilise JAMAIS de tirets cadratins (—) ou demi-cadratins (–). Utilise des virgules ou des points.
- PAS d'émojis, PAS de jargon technique inutile.
- DIFFÉRENCIATION : ${diffInstruction}
- RÉPONDS UNIQUEMENT AVEC LE JSON. PAS DE TEXTE AVANT OU APRÈS.

CONSIGNES PAR SECTION :
- HERO : Titre H1 (title), Description (desc) orientée Douleur/Solution.
- SERVICES : ${servicesInstruction}
- ABOUT : Titre, description concise (max 3 phrases) montrant comment la solution soulage le problème du client.
- FAQ : ${faqInstruction}
- CONTACT : Titre, description rassurante et bouton court adapté à ${contact}.
- SEO : title (max 60 car.) et description (max 155 car.).
- LINKEDIN : bannerTitle, points (3 bénéfices de 1-2 mots), vignette1Title (Contact), vignette2Title (Offre).

Structure JSON attendue :
{
  "hero": { "title": "...", "desc": "...", "ctaLabel": "..." },
  "services": { "title": "...", "items": [{ "h3": "...", "p": "..." }, { "h3": "...", "p": "..." }, { "h3": "...", "p": "..." }] },
  "testimonials": { "title": "..." },
  "gallery": { "title": "..." },
  "about": { "title": "...", "desc": "..." },
  "faq": { "title": "...", "items": [{ "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }, { "q": "...", "a": "..." }] },
  "contact": { "title": "...", "desc": "...", "ctaLabel": "...", "value": "" },
  "seo": { "title": "...", "description": "..." },
  "linkedin": { "bannerTitle": "...", "points": ["...", "...", "..."], "vignette1Title": "...", "vignette2Title": "...", "vignette1Cta": "...", "vignette2Cta": "..." }
}
Si mode='web', 'linkedin' est null. Si mode='linkedin', 'hero' et 'seo' sont null.`;

// --- 4. Appel API ---
console.log("API KEY présente ?", !!process.env.ANTHROPIC_API_KEY);
        const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
        const msg = await anthropic.messages.create({
            model: "claude-3-5-sonnet-latest",
            max_tokens: 2500,
            temperature: 0.7,
            system: systemPrompt,
            messages: [{
                role: "user",
                content: `Génère les textes pour un ${expertise}. Problème : ${probleme}. Services : ${servicesText}. Bénéfice : ${benefice}. Mode : ${mode}.`
            }],
            timeout: 20000
        });
        console.log("Réponse brute Claude :", JSON.stringify(msg));
// --- 5. Récupération et nettoyage de la réponse ---
    let aiResponse = msg?.content?.[0]?.text || "";
    console.log("Texte Claude avant nettoyage :", aiResponse);
        aiResponse = aiResponse.replace(/```json|```/g, '').trim();
    console.log("Texte Claude nettoyé :", aiResponse);
        const jsonStart = aiResponse.indexOf("{");
        const jsonEnd = aiResponse.lastIndexOf("}");
        if (jsonStart === -1 || jsonEnd === -1) {
            throw new Error("Invalid JSON returned by Claude");
        }
        const parsed = JSON.parse(aiResponse.slice(jsonStart, jsonEnd + 1));
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsed)
        };
        } catch (error) {
            console.error("ERREUR COMPLETE :", error);
            console.error("Erreur Anthropic:", error);
            const message = error?.message || "";
            const isQuotaError =
            message.includes("over_quota") ||
            message.includes("credit") ||
            message.includes("quota") ||
            message.includes("insufficient") ||
            error?.status === 402;
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                error: isQuotaError ? "SOLDE_EPUISE" : "ERREUR_TECHNIQUE",
                details: message
            })
        };
    }}