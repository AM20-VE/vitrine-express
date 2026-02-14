const axios = require('axios');
const AdmZip = require('adm-zip');

// Nettoie le nom pour l'URL (ex: "Boulangerie Ducrot" -> "boulangerie-ducrot")
const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Enlève les accents
    .replace(/[^a-z0-9 -]/g, '') // Enlève caractères spéciaux
    .replace(/\s+/g, '-') // Espaces -> tirets
    .replace(/-+/g, '-'); // Pas de doubles tirets
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { html, config } = JSON.parse(event.body);
    const token = process.env.NETLIFY_AUTH_TOKEN;
    const accountId = process.env.NETLIFY_ACCOUNT_ID;

    // 1. Préparation du nom de domaine
    const companyName = config.header?.companyName || "Ma Vitrine";
    let siteSlug = slugify(companyName);
    let finalDomain = `${siteSlug}.vitrine-express.net`;
    
    // Génération d'un ID court au cas où (ex: 4a2b)
    const shortId = Math.random().toString(36).substring(2, 6);

    let siteId;
    let deployUrl;

    // 2. TENTATIVE DE CRÉATION DU SITE
    try {
      const createSiteResponse = await axios.post(
        `https://api.netlify.com/api/v1/${accountId}/sites`,
        {
          name: `ve-${siteSlug}-${shortId}`, // Nom interne unique pour Netlify
          custom_domain: finalDomain
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      siteId = createSiteResponse.data.id;
      deployUrl = `https://${finalDomain}`;

    } catch (err) {
      // SI ERREUR (ex: domaine déjà pris par un autre utilisateur)
      if (err.response && (err.response.status === 422 || err.response.status === 409)) {
        console.log("Domaine déjà pris, tentative avec suffixe...");
        
        // On modifie le domaine avec le shortId
        finalDomain = `${siteSlug}-${shortId}.vitrine-express.net`;
        
        const fallbackResponse = await axios.post(
          `https://api.netlify.com/api/v1/${accountId}/sites`,
          {
            name: `ve-${siteSlug}-${shortId}-alt`,
            custom_domain: finalDomain
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        siteId = fallbackResponse.data.id;
        deployUrl = `https://${finalDomain}`;
      } else {
        throw err; // Autre erreur (token, etc.)
      }
    }

    // 3. PRÉPARATION DU ZIP (index.html + fichier de configuration)
    const zip = new AdmZip();
    
    // Ton fichier HTML
    zip.addFile("index.html", Buffer.from(html, "utf8"));
    
    // ON AJOUTE UN FICHIER _headers POUR FORCER LE TYPE HTML
    // Cela dit à Netlify : "Tous les fichiers de ce site doivent être lus comme du HTML"
    const headersContent = `/*
  Content-Type: text/html; charset=utf-8
  X-Content-Type-Options: nosniff
`;
    zip.addFile("_headers", Buffer.from(headersContent, "utf8"));

    const zipBuffer = zip.toBuffer();

    // 4. DÉPLOIEMENT DES FICHIERS
    await axios.post(
      `https://api.netlify.com/api/v1/sites/${siteId}/deploys`,
      zipBuffer,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/zip"
        }
      }
    );

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        success: true, 
        deployUrl: deployUrl,
        siteId: siteId 
      })
    };

  } catch (error) {
    const errorData = error.response ? error.response.data : error.message;
    console.error("Erreur Netlify:", errorData);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Échec du déploiement", details: errorData })
    };
  }
};