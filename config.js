let localConfig = {
    colors: { accent: "#8449d9", dark: "#0E1B2A", bgLight: "#F8FAFC" },
    meta: { title: "", description: "" },
    header: { logo: "", companyName: "Ton Logo ou nom de l'entreprise", useTextOnly: false },
    hero: {
        title: "Ton titre principal",
        desc: "Explique en une phrase ce que tu fais, pour qui, et le bénéfice principal. Simple, concret, sans jargon technique. Si on ne comprend pas en 5 secondes, simplifie.",
        ctaLabel: "Voir nos services",
        img: "",
        showFigures: true,
        figures: [
            { num: "150+", label: "PROJETS RÉALISÉS" },
            { num: "10", label: "ANNÉES d'EXPERTISE" },
            { num: "99%", label: "CLIENTS SATISFAITS" }
        ]
    },
    services: {
    title: "Nos solutions",
    items: [

        { h3: "Service 1", p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client.", price: "", prefix: "", showPrice: true, showPrefix: true },
        { h3: "Service 2", p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client.", price: "", prefix: "", showPrice: true, showPrefix: true },
        { h3: "Service 3", p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client.", price: "", prefix: "", showPrice: true, showPrefix: true }
    ]
},
    testimonials: {
    show: true,
    title: "Ce que nos clients disent",
    ctaText: "Et si vous étiez le prochain ?",
    items: [
        { stars: "5", text: "Copie ici une phrase réelle d’un client (avis Google, message, email…). Idéalement : le problème qu’il avait + ce que ton service lui a apporté. Court et authentique.", name: "Prénom du client", role: "Métier / activité" },
        { stars: "5", text: "Avant de travailler avec [ton activité], je [problème ou situation]. Aujourd’hui, je [résultat ou bénéfice concret].", name: "Prénom", role: "Statut ou secteur" },
        { stars: "5", text: "Ce que j’ai le plus apprécié : [point fort de ton accompagnement ou de ta prestation]. Je recommande à [type de client].", name: "Prénom", role: "Métier / entreprise" }
    ]
},
    gallery: {
        title: "Des résultats concrets",
        images: [
            { src: "", cap: "Témoignage client : [Prénom], [métier/statut] : ‘[Phrase courte sur ce qu’ils ont aimé ou le résultat]" },
            { src: "", cap: "Projet / réalisation : [Nom du projet] pour [client/secteur] – [bénéfice principal ou usage]" },
            { src: "", cap: "Bénéfice / avant‑après : [Produit/service réalisé] – aide [client/secteur] à [résultat principal]" }
        ]
    },
    about: {
        title: "Qui sommes nous",
        desc: "Racontez en quelques phrases qui vous êtes et ce que vous faites. Vous pouvez : vous présenter individuellement (votre rôle, votre approche, vos forces) ; présenter votre équipe (qui fait quoi, vos expertises) ; ou expliquer votre concept / votre société (mission, valeur ajoutée, bénéfices pour vos clients). Soyez clair, simple et engageant : l’objectif est que quelqu’un comprenne votre activité en 5 secondes.",
        img: ""
    },
    practical: {
        show: false,
        title: "Infos Pratiques",
        locationTitle: "Notre Emplacement",
        hoursTitle: "Nos Horaires",
        mapBtnLabel: "Voir l'itinéraire",
        address: "123 Rue de la Réussite, 75000 Paris",
        mapsLink: "https://goo.gl/maps/...",
        displayMode: "text",
        hoursImg: "",
        hoursItems: [
            { label: "Lun - Ven", time: "09:00 - 18:00" },
            { label: "Samedi", time: "10:00 - 14:00" },
            { label: "Dimanche", time: "10:00 - 14:00" }
        ]
    },
    faq: {
        show: true,
        title: "Questions fréquentes",
        items: [
            {
            q: "Est-ce que cette offre est faite pour moi ?",
            a: "Explique à qui s’adresse ton service (type de client, situation, besoin principal) et dans quels cas c’est idéal. Tu peux aussi préciser pour qui ce n’est pas forcément adapté."
            },
            {
            q: "Comment se passe la collaboration / la prestation ?",
            a: "Décris les grandes étapes simplement : premier contact, échange ou diagnostic, réalisation, livraison ou suivi. Rassure sur la clarté et la simplicité du process."
            },
            {
            q: "En combien de temps puis-je avoir des résultats ?",
            a: "Indique un délai réaliste : mise en place, livraison, premiers effets visibles. Si ça dépend de certains facteurs, précise lesquels sans entrer dans le technique."
            },
            {
            q: "Puis-je adapter ou faire évoluer la prestation plus tard ?",
            a: "Explique ce qui est modifiable, évolutif ou personnalisable dans le temps, et dans quelles conditions (ajustements, options, accompagnement, etc.)."
            },
            {
            q: "Comment démarrer / prendre contact ?",
            a: "Explique clairement l’action à faire ensuite : prise de rendez-vous, formulaire, appel, message. Rassure sur le fait que le premier échange est simple et sans engagement."
            }
        ]
    },
    contact: {
        title: "Parlons de votre projet",
        desc: "Explique ici comment on te contacte et ce que la personne va obtenir. Dis s’il s’agit d’un appel, d’un mail ou d’un rendez-vous, et à quoi ça sert (questions, devis, projet).En une lecture, on doit savoir ce qui se passe après le clic.",
        ctaLabel: "Prendre RDV",
        type: "RDV",
        value: "https://votre-url-ici"
    },
    socials: {
        title: "Suivez-nous",
        linkedin: "https://linkedin.com/",  
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/"
    },
    legal: {
        editor: "[NOM PRÉNOM]",
        legalName: "[RAISON SOCIALE]",
        address: "[ADRESSE COMPLÈTE]",
        siren: "[VOTRE SIREN]",
        siret: "[VOTRE SIRET]",
        contactType: "EMAIL",
        contactValue: "Y29udGFjdEBkb21haW5lLmNvbQ==",
        hostMode: "Netlify Inc. 610 22nd Street, San Francisco, CA 94107, USA"
    },
    linkedinKit: {
        bannerTitle: "Explique quelle est ton offre unique et le bénéfice pour tes futurs clients",
        figures: [
            { label: "Point clé 1" },
            { label: "Point clé 2" },
            { label: "Point clé 3" }
        ],
        vignette1Title: "Echangeons sur votre projet",
        vignette1Cta: "Sélectionner",
        vignette2Title: "Découvrir mon univers",
        vignette2Cta: "Sélectionner"
    },
};
// On récupère la frame (déjà fait plus haut dans ton code normalement)
const frame = document.getElementById('preview-frame');

// PROTECTION LIGNE 130 :
if (frame) {
    frame.onload = () => {
        sync();
    };
} else {
    // Si la frame n'est pas là, on ne plante pas le script
    console.warn("Ligne 130 : 'preview-frame' introuvable. On continue sans sync.");
}
// --- LIENS VERS PAIEMENT ---
// On l'attache à window pour garantir son accessibilité globale
window.handleFinalAction = function() {
    // Vérification de sécurité pour localConfig
    if (typeof localConfig === 'undefined') {
        console.error("Erreur : localConfig n'est pas défini.");
        return;
    }
    const mode = localConfig.selectedMode;
    let stripeUrl = "";
    console.log("Mode sélectionné avant redirection :", mode);
    switch (mode) {
        case 'web':
            stripeUrl = "https://buy.stripe.com/test_aFacN46iOgsj2pIgl3frW03";
            break;
        case 'linkedin':
            stripeUrl = "https://buy.stripe.com/test_bJedR8fTo1xp9Sa4ClfrW05";
            break;
        case 'full':
            stripeUrl = "https://buy.stripe.com/test_bJe8wOfTob7Z8O67OxfrW04";
            break;
        default:
            alert("Merci de sélectionner un forfait (Web, LinkedIn ou Full) avant de continuer.");
            return;
    }
    const finalText = document.getElementById('final-cta-text');
    if (finalText) {
        finalText.innerText = "Redirection vers Stripe...";
    }
    setTimeout(() => {
        console.log("Redirection vers :", stripeUrl);
        window.location.href = stripeUrl;
    }, 600);
};
// --- TRACKING MAIL & AFFICHAGE CONDITIONNEL ---
const emailInput = document.getElementById("lead-email");
const validateBtn = document.getElementById("lead-email-validate");
const iaSection = document.getElementById("section-ia");
const iaElements = Array.from(iaSection.querySelector(".space-y-6").children)
    .filter(el => !el.classList.contains("input-group"));
iaElements.forEach(el => el.style.display = "none");
let errorMsg = document.createElement("p");
errorMsg.className = "text-xs text-red-400 mt-1";
errorMsg.style.display = "none";
errorMsg.innerText = "Merci de renseigner un email valide.";
const inputGroupDiv = emailInput.closest("div.flex");
inputGroupDiv.insertAdjacentElement("afterend", errorMsg);
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function markButtonValidated() {
    validateBtn.style.background = "#10B981"; 
    validateBtn.innerHTML = '<span style="color:white; font-weight:bold; font-size:1.2rem;">✓</span>'; 
    validateBtn.disabled = true;
}
const storedEmail = localStorage.getItem("lead_email");
if (storedEmail && isValidEmail(storedEmail)) {
    emailInput.value = storedEmail;
    iaElements.forEach(el => el.style.display = "block");
    iaSection.dataset.sent = "true";
    markButtonValidated();
}
validateBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
        errorMsg.style.display = "block";
        return;
    }
    errorMsg.style.display = "none"; 
    localStorage.setItem("lead_email", email);

    iaElements.forEach(el => el.style.display = "block");

    iaSection.dataset.sent = "true"; 
    markButtonValidated();
});
// --- ENVOI A NETLIFY ---
function sendProgressToNetlify() {
    const email = localStorage.getItem("lead_email");
    if (!email) return; // pas de mail, pas d'envoi
    // Dernier step atteint
    const lastStep = localConfig.lastStep || "ia";
    // Calcul du pourcentage de progression
    const SEQUENCE = [
        'section-vitrine','section-model','section-couleurs','section-identite','section-ia',
        'section-accueil','section-services','section-avis',
        'section-gallery','section-about','section-practical',
        'section-faq','section-contact','section-social','section-seo',
        'section-legale','section-hebergement','section-linkedin-kit','section-finale'
    ];
    const stepIndex = SEQUENCE.indexOf(lastStep);
    const progress = stepIndex !== -1 ? Math.round(((stepIndex + 1) / SEQUENCE.length) * 100) : 10;
    const formData = new FormData();
    formData.append("form-name", "lead-vitrine");
    formData.append("email", email);
    formData.append("status", progress >= 100 ? "completed" : "in_progress");
    formData.append("step", lastStep);
    formData.append("progress", progress);
    fetch("/", { method: "POST", body: formData });
}
// --- Envoi quand l'utilisateur quitte ou refresh ---
window.addEventListener("beforeunload", () => {
    sendProgressToNetlify();
});
// --- CONFIGURATION DES VALEURS FIXES (NON MODIFIABLES) ---
function applyPracticalDefaults() {
    if (!localConfig.practical) localConfig.practical = {};
    localConfig.practical.locationTitle = "Notre Emplacement";
    localConfig.practical.hoursTitle = "Nos Horaires";
    localConfig.practical.mapBtnLabel = "Voir l'itinéraire";
    const fixedLabels = ["Lun - Ven", "Samedi", "Dimanche"];
    if (!localConfig.practical.hoursItems) {
        localConfig.practical.hoursItems = fixedLabels.map(l => ({ label: l, time: "" }));
    } else {
        localConfig.practical.hoursItems.forEach((item, index) => {
            if (fixedLabels[index]) item.label = fixedLabels[index];
        });
    }
}
// --- SELECTION DE LA VITRINE ---
function switchConfigMode(mode, isAuto = false) {
    const placeholder = document.getElementById('preview-placeholder');
    const previewWrapper = document.getElementById('preview-wrapper');
    const previewMainHeader = document.querySelector('main .absolute.top-0'); 
    if (!mode || mode === "") {
        if (placeholder) placeholder.classList.remove('hidden');
        if (previewWrapper) previewWrapper.classList.add('opacity-0');
        if (previewMainHeader) previewMainHeader.classList.add('hidden');
        document.querySelectorAll('.mode-web, .mode-linkedin, .mode-core').forEach(s => s.style.display = 'none');
        const sectionFinale = document.getElementById('section-finale');
        if(sectionFinale) sectionFinale.style.display = 'none';
        return; 
    }
    localConfig.selectedMode = mode;
    if (placeholder) placeholder.classList.add('hidden');
    if (previewWrapper) previewWrapper.classList.remove('opacity-0');
    if (previewMainHeader) previewMainHeader.classList.remove('hidden');
    if (!isAuto) {
        const btnVitrine = document.querySelector('#section-vitrine .btn-save-step');
        if (btnVitrine && localConfig.steps?.['section-vitrine'] === true) {
            localConfig.steps['section-vitrine'] = false;
            btnVitrine.classList.remove('btn-validated-status');
            btnVitrine.innerText = "Valider ma vitrine";
        }
        localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    }
    const webBtn = document.getElementById('toggle-web-btn');
    const liBtn = document.getElementById('toggle-li-btn');
    const webSections = document.querySelectorAll('.mode-web');
    const linkedinSections = document.querySelectorAll('.mode-linkedin');
    const coreSections = document.querySelectorAll('.mode-core');
    const liContainer = document.getElementById('container-linkedin-global');
    const sectionFinale = document.getElementById('section-finale');
    webSections.forEach(s => s.style.display = 'none');
    linkedinSections.forEach(s => s.style.display = 'none');
    coreSections.forEach(s => s.style.display = 'none');
    if(liContainer) liContainer.style.display = 'none';
    if(sectionFinale) sectionFinale.style.display = 'none';
    if (mode === 'web') {
        coreSections.forEach(s => s.style.display = 'block');
        webSections.forEach(s => s.style.display = 'block');
        if(sectionFinale) sectionFinale.style.display = 'block';
        webBtn?.classList.add('hidden');
        liBtn?.classList.add('hidden');
        switchPreview('web');
    } 
    else if (mode === 'linkedin') {
        coreSections.forEach(s => s.style.display = 'block'); 
        linkedinSections.forEach(s => s.style.display = 'block');
        if(liContainer) liContainer.style.display = 'block'; 
        if(sectionFinale) sectionFinale.style.display = 'block'; 
        webBtn?.classList.add('hidden');
        liBtn?.classList.add('hidden');
        switchPreview('linkedin');
    } 
    else if (mode === 'full') {
        coreSections.forEach(s => s.style.display = 'block');
        webSections.forEach(s => s.style.display = 'block');
        linkedinSections.forEach(s => s.style.display = 'block');
        if(liContainer) liContainer.style.display = 'block';
        if(sectionFinale) sectionFinale.style.display = 'block';
        webBtn?.classList.remove('hidden');
        liBtn?.classList.remove('hidden');
        switchPreview('web');
    }
    checkGlobalValidation();
}
function switchPreview(mode) {
    const webFrame = document.getElementById('preview-frame');
    const liFrame = document.getElementById('linkedin-frame');
    const protector = document.getElementById('linkedin-protector');
    const webBtn = document.getElementById('toggle-web-btn');
    const liBtn = document.getElementById('toggle-li-btn');

    // On vérifie que les éléments vitaux existent
    if (!webFrame || !liFrame) {
        console.warn("Une des iframes est manquante dans le HTML.");
        return; 
    }

    const activeClasses = ['bg-white', 'shadow-sm', 'border-slate-200', 'text-[#8449d9]'];
    const inactiveClasses = ['bg-slate-50/50', 'border-transparent', 'text-slate-500'];

    if (mode === 'web') {
        webFrame.classList.remove('hidden');
        liFrame.classList.add('hidden');
        if(protector) protector.classList.add('hidden');
        if(webBtn) {
            webBtn.classList.add(...activeClasses);
            webBtn.classList.remove(...inactiveClasses);
        }
        if(liBtn) {
            liBtn.classList.add(...inactiveClasses);
            liBtn.classList.remove(...activeClasses);
        }
    } 
    else if (mode === 'linkedin') {
        webFrame.classList.add('hidden');
        liFrame.classList.remove('hidden');
        if(protector) protector.classList.remove('hidden'); 
        if(liBtn) {
            liBtn.classList.add(...activeClasses);
            liBtn.classList.remove(...inactiveClasses);
        }
        if(webBtn) {
            webBtn.classList.add(...inactiveClasses);
            webBtn.classList.remove(...activeClasses);
        }
    }
    localConfig.selectedPreview = mode;
}
// --- INITIALISATION ---
window.onload = () => {
    const saved = localStorage.getItem('vitrine_express_progression');
    if (saved) {
        try {
            Object.assign(localConfig, JSON.parse(saved));
            applyPracticalDefaults();
        // --- SYNCHRO MODÈLE & CATÉGORIE ---
        const selectedTemplateId = localConfig.meta?.template;
        if (selectedTemplateId) {
            const templateData = TEMPLATES_DB.find(t => t.id === selectedTemplateId);
            if (templateData) {
                const catButtons = document.querySelectorAll('.cat-btn');
                const targetCatBtn = Array.from(catButtons).find(btn => 
                    btn.innerText.toUpperCase().includes(templateData.cat.toUpperCase())
                );
                if (targetCatBtn) {
                    filterTemplates(templateData.cat, targetCatBtn);
                }
                adaptUIForTemplate(selectedTemplateId);
                frame.src = `template-${selectedTemplateId}.html`;
                const liFrame = document.getElementById('linkedin-frame');
                if (liFrame) {
                    liFrame.src = `template-linkedin-${selectedTemplateId}.html`;
                    liFrame.onload = () => sync(); 
                }
            }
        } else {
            const firstCatBtn = document.querySelector('.cat-btn');
            if (firstCatBtn) filterTemplates('Essentiel', firstCatBtn);
        }
        // --- SYNCHRO VISUELLE DES COULEURS ---
            if (localConfig.colors) {
                Object.entries(localConfig.colors).forEach(([key, colorVal]) => {
                    const input = document.getElementById(`cp-${key}`);
                    if (input) input.value = colorVal;
                    const label = document.getElementById(`label-hex-${key}`);
                    if (label) label.innerText = colorVal.toUpperCase();
                    const previewSquare = document.getElementById(`pv-${key}`);
                    if (previewSquare) previewSquare.style.backgroundColor = colorVal;
                });
            }
        // --- SYNCHRO LOGO / NOM ENTREPRISE ---
            if (localConfig.header) {
                const useTextOnly = localConfig.header.useTextOnly;
                const toggle = document.getElementById('no-logo-toggle');
                if (toggle) toggle.checked = useTextOnly;
                toggleLogoMode(useTextOnly);
                const nameInput = document.getElementById('input-company-name');
                if (nameInput) nameInput.value = localConfig.header.companyName || "";
            }
        // SYNCHRO LOGO LINKEDIN
            const showLogoToggle = document.getElementById('li-show-logo-toggle');
            if (showLogoToggle && localConfig.linkedinKit) {
                showLogoToggle.checked = localConfig.linkedinKit.showLogo !== false;
            }
        // --- SYNCHRO IMAGES ---
            if (localConfig.header?.logo) updateImageUI('header', 'logo', localConfig.header.logo);
            if (localConfig.hero?.img) updateImageUI('hero', 'img', localConfig.hero.img);
            if (localConfig.about?.img) updateImageUI('about', 'img', localConfig.about.img);
            if (localConfig.practical?.hoursImg) updateImageUI('practical', 'hoursImg', localConfig.practical.hoursImg);
        // --- SYNCHRO GALERIE ---
            localConfig.gallery?.images?.forEach((imgObj, index) => {
                if (imgObj.src) updateGalleryImageUI(index, imgObj.src);
            });
        // --- SYNCHRO INFOS PRATIQUES ---
            if (localConfig.practical) {
                const p = localConfig.practical;
                const isEnabled = p.show === true;
                const mainToggle = document.getElementById('toggle-practical');
                if (mainToggle) mainToggle.checked = isEnabled;
                const infoCard = document.getElementById('practical-info-card');
                const fieldsContainer = document.getElementById('practical-content');
                if (isEnabled) {
                    infoCard?.classList.add('hidden');
                    fieldsContainer?.classList.remove('hidden');
                } else {
                    infoCard?.classList.remove('hidden');
                    fieldsContainer?.classList.add('hidden');
                }
                const ctaToggle = document.querySelector('input[onchange="updatePracticalCta(this.checked)"]');
                if (ctaToggle) ctaToggle.checked = p.showMapBtn !== false;
                setPracticalMode(p.displayMode || 'text');
            }
        // --- SYNCHRO TOGGLE FIGURES ---
            const toggleFigures = document.getElementById('toggle-figures');
            if (toggleFigures) toggleFigures.checked = localConfig.hero?.showFigures !== false;
        // --- SYNCHRO FAQ propre (comme pour Avis) ---
            const toggleFaq = document.getElementById('toggle-faq');
            const fieldsFaq = document.getElementById('faq-editor-content');
            if (!localConfig.faq) localConfig.faq = { show: true, title: "Questions fréquentes", items: [] };
            const isFaqEnabled = localConfig.faq.show !== false; 
            if (toggleFaq) toggleFaq.checked = isFaqEnabled;
            if (fieldsFaq) {
                fieldsFaq.style.opacity = isFaqEnabled ? "1" : "0.3";
                fieldsFaq.style.pointerEvents = isFaqEnabled ? "auto" : "none";
            }
        // --- SYNCHRO AVIS ---
            if (localConfig.testimonials) {
                const isAvisEnabled = localConfig.testimonials.show !== false;
                const toggleAvis = document.getElementById('toggle-testimonials');
                const fieldsAvis = document.getElementById('testimonials-editor-content');
                if (toggleAvis) toggleAvis.checked = isAvisEnabled;
                if (fieldsAvis) {
                    fieldsAvis.style.opacity = isAvisEnabled ? "1" : "0.3";
                    fieldsAvis.style.pointerEvents = isAvisEnabled ? "auto" : "none";
                }
            }
        // --- FORCE LE CHECK VISUEL DES RADIOS ---
            if (localConfig.selectedMode) {
                const radio = document.querySelector(`input[name="config-type"][value="${localConfig.selectedMode}"]`);
                if (radio) radio.checked = true;
            }
        // --- SYNCHRO BARRE DE PROGRESSION ---
            if (localConfig.lastStep) updateProgressBar(localConfig.lastStep);
        // --- RESTAURATION DES BOUTONS "VALIDÉ" ---
            if (localConfig.steps) {
                Object.keys(localConfig.steps).forEach(sectionId => {
                    if (localConfig.steps[sectionId] === true) {
                         const btn = document.querySelector(`#${sectionId} .btn-save-step`);
                    if (btn) {
                        btn.classList.add('btn-validated-status');
                        btn.innerText = "✓ Validé";
                        btn.disabled = false;
                        btn.style.opacity = "1";
                        btn.style.pointerEvents = "auto";
                    }
                }
            });
        }
        } catch(e) {
            console.error("Erreur chargement local", e);
        }
    } else {
// --- FORCE ÉTAT INITIAL SI PREMIÈRE VISITE ---
        applyPracticalDefaults();
        localConfig.services?.items?.forEach(item => {
            item.showPrice = true;
            item.showPrefix = true;
        });
    }
    initPracticalDefaults();
    switchConfigMode(localConfig.selectedMode, true);
    checkPracticalValidity();
    checkAccueilValidity(); 
    checkIdentiteValidity();
    checkServicesValidity();
    checkTestimonialsValidity();
    checkFaqValidity();
    checkLegalValidity();
    checkLinkedinValidity();
    checkGlobalValidation();
};
// --- ENVOI DES DONNEES ---
function sync() {
    const mode = localConfig.selectedMode || 'web';
    // Web
    if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'UPDATE_CONFIG', config: localConfig, viewMode: mode }, '*');
    }
    // LinkedIn
    const liFrame = document.getElementById('linkedin-frame');
    if (liFrame && liFrame.contentWindow) {
        const kit = localConfig.linkedinKit || {};
        const dataForLinkedin = {
            colors: localConfig.colors,
            header: localConfig.header,
            linkedinKit: kit,
            hero: {
                title: kit.bannerTitle, 
                figures: kit.figures,
                showFigures: localConfig.hero?.showFigures !== false
            },
            vignette1Title: kit.vignette1Title,
            vignette1Cta: kit.vignette1Cta || "Contact",
            vignette2Title: kit.vignette2Title,
            vignette2Cta: kit.vignette2Cta || "Voir l'offre",
            contact: { ctaLabel: kit.vignette1Cta || "Contact" }
        };
        liFrame.contentWindow.postMessage({ type: 'UPDATE_CONFIG', config: dataForLinkedin }, '*');
    }
}
// --- PROTECTION ANTIVOL  ---
document.addEventListener('contextmenu', (e) => {
    if (localConfig.selectedPreview === 'linkedin') {
        const isInsidePreview = e.target.closest('#preview-wrapper');
        if (isInsidePreview) {
            e.preventDefault();
            console.log("Protection active : Clic droit bloqué.");
            return false;
        }
    }
});
document.addEventListener('dragstart', (e) => {
    if (localConfig.selectedPreview === 'linkedin' && e.target.closest('#preview-wrapper')) {
        e.preventDefault();
    }
});
// --- GESTION DES IMAGES  ---
function processFile(file, callback, isLogo = false) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = isLogo ? 400 : 800;
            let width = img.width;
            let height = img.height;
            if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const webpData = canvas.toDataURL('image/webp', 0.7);
            callback(webpData);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
function handleImage(input, section, key) {
    const isLogo = (key === 'logo');
    processFile(input.files[0], (webpData) => {
        localConfig[section][key] = webpData;
        updateImageUI(section, key, webpData); 
        sync();
    }, isLogo);
}
function handleDrop(event, section, key) {
    event.preventDefault();
    const dropZone = document.getElementById(`drop-zone-${section}`);
    dropZone.classList.remove('bg-slate-100', 'border-[#8449d9]');
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        const isLogo = (key === 'logo');
        processFile(event.dataTransfer.files[0], (webpData) => {
            localConfig[section][key] = webpData;
            updateImageUI(section, key, webpData); 
            sync();
        }, isLogo);
    }
}
function updateImageUI(section, key, data) {
    const preview = document.getElementById(`preview-img-${section}`);
    const placeholder = document.getElementById(`upload-placeholder-${section}`);
    const trashBtn = document.getElementById(`trash-btn-${section}`);
    const dropZone = document.getElementById(`drop-zone-${section}`);
    if (data && data !== "") {
        if (preview) preview.src = data, preview.classList.remove('hidden');
        if (placeholder) placeholder.classList.add('hidden');
        if (trashBtn) trashBtn.classList.remove('hidden');
        if (dropZone) dropZone.classList.add('border-green-400', 'border-solid');
    } else {
        if (preview) preview.src = "", preview.classList.add('hidden');
        if (placeholder) placeholder.classList.remove('hidden');
        if (trashBtn) trashBtn.classList.add('hidden');
        if (dropZone) dropZone.classList.remove('border-green-400', 'border-solid');
    }
    if (section === 'hero') {
        checkAccueilValidity();
        markSectionDirty('section-accueil', "Valider l'accueil");
    }
    if (section === 'header' && key === 'logo') {
        checkIdentiteValidity() 
        markSectionDirty('section-identite', "Valider l'identité visuelle");
    }
}
function clearImage(section, key) {
    localConfig[section][key] = "";
    updateImageUI(section, key, "");
    sync();
}
// --- NAVIGATION & PROGRESSION ---
function validateStep(nextSectionSelector) {
    const currentBtn = event ? event.currentTarget : null; 
    if (currentBtn) {
        currentBtn.classList.add('btn-validated-status');
        currentBtn.innerText = "✓ Validé";
    }
    const cleanId = nextSectionSelector.replace('#', ''); 
    if (!localConfig.steps) localConfig.steps = {};
    const parentSection = currentBtn ? currentBtn.closest('[id]') : null;
    if (parentSection) {
        localConfig.steps[parentSection.id] = true;
    }
    localConfig.lastStep = cleanId; 
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    currentActiveSectionId = cleanId;
    const nextSection = document.getElementById(cleanId);
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nextSection.classList.add('ring-2', 'ring-[#8449d9]/30', 'rounded-2xl');
        setTimeout(() => nextSection.classList.remove('ring-2'), 2000);
    }
    const scrollMapping = { 
        'section-accueil': 'hero', 
        'section-services': 'services', 
        'section-avis': 'testimonials', 
        'section-gallery': 'social-proof', 
        'section-about': 'about', 
        'section-practical': 'practical', 
        'section-faq': 'faq', 
        'section-contact': 'contact', 
        'section-social': 'social-links', 
        'section-legale': 'footer-credit' 
    };
    const targetSection = scrollMapping[cleanId];
    if (targetSection && frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'SCROLL_TO', section: targetSection }, '*');
    }
    updateProgressBar(cleanId);
    checkGlobalValidation();
}
function updateProgressBar(currentSectionId) {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const SEQUENCE = [
        'section-vitrine','section-model', 'section-couleurs', 'section-identite', 'section-ia',
        'section-accueil', 'section-services', 'section-avis', 
        'section-gallery', 'section-about', 'section-practical', 
        'section-faq', 'section-contact', 'section-social', 'section-seo',
        'section-legale', 'section-hebergement', 'section-linkedin-kit', 'section-finale'
    ];
    const stepIndex = SEQUENCE.indexOf(currentSectionId);
    let percentage = 0;

    if (stepIndex !== -1) {
        percentage = Math.round(((stepIndex + 1) / SEQUENCE.length) * 100);
    } else {
        percentage = 5; 
    }
    if (progressFill) {
        progressFill.style.width = percentage + '%';

        if (percentage >= 100) {
            progressFill.style.background = "linear-gradient(90deg, #10B981, #059669)";
        } else {
            progressFill.style.background = "linear-gradient(90deg, #8449d9, #059669)";
        }
    }
    if (progressText) {
        progressText.innerText = percentage + '% configuré';
    }
}
// --- LOGIQUE MÉTIER & CONFIGURATION ---
const TEMPLATES_DB = [
    { id: 'moderne',   name: 'Moderne',   cat: 'Essentiel', hasHeroImg: true },
    { id: 'zen',       name: 'Zen',       cat: 'Sérénité',  hasHeroImg: false }, 
    { id: 'pop',       name: 'Pop Art',   cat: 'Audace',    hasHeroImg: true },
    { id: 'audacieux', name: 'Impact',    cat: 'Audace',    hasHeroImg: false } 
];
function filterTemplates(category, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.remove('active', 'border-[#8449d9]', 'bg-violet-50/50');
    });
    btn.classList.add('active', 'border-[#8449d9]', 'bg-violet-50/50');
    const grid = document.getElementById('grid-templates');
    if (!grid) return;
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    const filtered = TEMPLATES_DB.filter(t => t.cat === category);
    filtered.forEach(tmpl => {
        const card = document.createElement('div');
        const isCurrent = (localConfig.meta && localConfig.meta.template === tmpl.id) || 
                         frame.src.includes(`template-${tmpl.id}.html`);
        card.className = `model-card ${isCurrent ? 'active border-[#8449d9] ring-1 ring-[#8449d9]' : 'border-slate-100'} cursor-pointer p-6 rounded-xl border-2 bg-slate-50 hover:border-[#8449d9] transition-all flex items-center justify-center group`;
        card.onclick = () => selectModel(tmpl.id, card);
        const nameLabel = document.createElement('p');
        nameLabel.className = "font-bold text-xs uppercase tracking-widest text-slate-600 group-[.active]:text-[#8449d9]";
        nameLabel.textContent = tmpl.name;
        card.appendChild(nameLabel);
        grid.appendChild(card);
    });
}
function selectModel(type, el) {
    document.querySelectorAll('.model-card').forEach(c => {
        c.classList.remove('active', 'border-[#8449d9]', 'ring-1', 'ring-[#8449d9]');
    });
    el.classList.add('active', 'border-[#8449d9]', 'ring-1', 'ring-[#8449d9]');
    if (!localConfig.meta) localConfig.meta = {};
    localConfig.meta.template = type;
    adaptUIForTemplate(type);
    frame.src = `template-${type}.html`;
    frame.onload = () => sync();
    const liFrame = document.getElementById('linkedin-frame');
    if (liFrame) {
        liFrame.src = `template-linkedin-${type}.html`;
        liFrame.onload = () => sync(); 
    }
    const btn = document.querySelector('#section-model .btn-save-step');
    if (btn && localConfig.steps?.['section-model'] === true) {
        localConfig.steps['section-model'] = false; 
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider ce modèle";
    }
}
function updateColorSync(key, value) {
    localConfig.colors[key] = value;
    const label = document.getElementById(`label-hex-${key}`);
    if (label) label.textContent = value.toUpperCase();
    const preview = document.getElementById(`pv-${key}`);
    if (preview) preview.style.backgroundColor = value;
    localConfig.steps['section-couleurs'] = false;
    const btn = document.querySelector('#section-couleurs .btn-save-step');
    if (btn) {
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider mes couleurs";
        btn.disabled = false;
    }
    sync();
}
function updateText(section, key, value) { 
    if (!localConfig[section]) {
        localConfig[section] = (section === 'faq' || section === 'about') ? { show: true } : {};
    }
    if (section === 'header' && key === 'companyName') {
        markSectionDirty('section-identite', "Valider l'identité visuelle");
        checkIdentiteValidity();  
    }
    localConfig[section][key] = value;
    if (section === 'hero') {
        markSectionDirty('section-accueil', "Valider l'accueil");
    }
    if (section === 'services') {
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
    } 
    if (section === 'testimonials') {
    markSectionDirty('section-avis', "Valider les avis");
    checkTestimonialsValidity();
    }
    if (section === 'about') {
    markSectionDirty('section-about', "Valider l'à propos'");
    checkAboutValidity();
    }
    if (section === 'practical') {
    markSectionDirty('section-practical', "Valider les infos'");
    }
    if (section === 'faq') {
    markSectionDirty('section-faq', "Valider la faq");
    }
    if (section === 'contact') {
    markSectionDirty('section-contact', "Valider le contact'");
    checkContactValidity();
    }
    sync(); 
}
function updateServiceCard(index, key, value) {
    if (localConfig.services && localConfig.services.items[index]) {
        localConfig.services.items[index][key] = value;
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
        sync();
    }
}
// --- LOGIQUE D'AFFICHAGE LOGO ---
function toggleLogoMode(noLogo) {
    const uploadZone = document.getElementById('container-logo-upload');
    localConfig.header.useTextOnly = noLogo;
    if (noLogo) {
        uploadZone.style.opacity = "0.5";
        uploadZone.style.pointerEvents = "none";
    } else {
        uploadZone.style.opacity = "1";
        uploadZone.style.pointerEvents = "auto";
    }
    resetIdentiteValidation()
    sync(); 
}
// ---  GÉNÉRATION DU FAVICON DYNAMIQUE ---
function updateDynamicFavicon() {
    const fav = document.getElementById('favicon');
    const favApple = document.getElementById('favicon-apple');
    const accentColor = localConfig.colors?.accent || '#1ECAD3';
    const companyName = localConfig.header?.companyName || "Entreprise";
    const logo = localConfig.header?.logo;
    if (logo && logo.trim() !== "" && !localConfig.header.useTextOnly) {
        if (fav) fav.href = logo;
        if (favApple) favApple.href = logo;
    } else {
        const canvas = document.createElement('canvas');
        canvas.width = 64; canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = accentColor;
        ctx.beginPath(); ctx.arc(32, 32, 32, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 38px sans-serif";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(companyName.charAt(0).toUpperCase(), 32, 32);
        const dataUrl = canvas.toDataURL('image/png');
        if (fav) fav.href = dataUrl;
        if (favApple) favApple.href = dataUrl;
    }
}
// --- LOGIQUE DÉDIÉE À LA SECTION ACCUEIL ---
function updateHeroToggle(key, value) {
    localConfig.hero[key] = value;
    const container = document.getElementById('figures-container');
    if (container) {
        container.style.opacity = value ? "1" : "0.4";
        container.style.pointerEvents = value ? "auto" : "none";
    }
   markSectionDirty('section-accueil', "Valider l'accueil");
    sync();
}
function updateFigure(index, key, value) {
    if (!localConfig.hero.figures) {
        localConfig.hero.figures = [
            { num: '', label: '' },
            { num: '', label: '' },
            { num: '', label: '' }
        ];
    }
    if (localConfig.hero.figures[index]) {
        localConfig.hero.figures[index][key] = value;
    }
    markSectionDirty('section-accueil', "Valider l'accueil");
    sync();
}
function handleLabelSelectChange(index, value) {
    const customInput = document.getElementById(`fig-custom-${index}`);
        markSectionDirty('section-accueil', "Valider l'accueil");
    if (value === 'CUSTOM') {
        if (customInput) customInput.classList.remove('hidden');
    } else {
        if (customInput) customInput.classList.add('hidden');
        updateFigure(index, 'label', value);
    }
}
function handleCTASelect(value) {
    const customInput = document.getElementById('hero-cta-custom');
    if (value === 'CUSTOM') {
        customInput.classList.remove('hidden');
    } else {
        customInput.classList.add('hidden');
        updateText('hero', 'ctaLabel', value);
    }
    markSectionDirty('section-accueil', "Valider l'accueil");
}
// --- LOGIQUE DÉDIÉE À LA SECTION SERVICES ---
function handleIndicationChange(index, value) {
    const customInput = document.getElementById(`custom-prefix-${index}`);
    
    if (value === 'Saisie libre') {
        customInput.classList.remove('hidden');
    } else {
        customInput.classList.add('hidden');
        customInput.value = ""; 
        updateServiceCard(index, 'prefix', value);
    }
}
function toggleServiceFeature(index, key, isChecked) {
    if (localConfig.services && localConfig.services.items[index]) {
        localConfig.services.items[index][key] = isChecked;
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
        sync();
    }
}
function updateServiceCard(index, key, value) {
    if (localConfig.services && localConfig.services.items[index]) {
        localConfig.services.items[index][key] = value;

        if (key === 'price' && value.trim() !== "") localConfig.services.items[index].showPrice = true;
        if (key === 'prefix' && value.trim() !== "") localConfig.services.items[index].showPrefix = true;
        markSectionDirty('section-services', "Valider les services");
        checkServicesValidity();
        sync();
    }
}
// --- LOGIQUE DÉDIÉE À LA SECTION AVIS ---
function updateTestimonial(index, key, value) {
    if (!localConfig.testimonials.items[index]) {
        localConfig.testimonials.items[index] = {
            stars: 5, 
            text: "",
            name: "",
            role: ""
        };
    }
    if (key === 'stars') {
        localConfig.testimonials.items[index][key] = parseInt(value) || 5;
    } else {
        localConfig.testimonials.items[index][key] = value;
    }
    markSectionDirty('section-avis', "Valider les avis");
    checkTestimonialsValidity();
    sync();
}
// --- LOGIQUE DÉDIÉE À LA SECTION GALERIE ---
function updateGalleryGrid(count) {
    const num = parseInt(count);
    const items = document.querySelectorAll('.gal-item');
    items.forEach((item, index) => {
        index < num ? item.classList.remove('hidden') : item.classList.add('hidden');
    });
    if (num > localConfig.gallery.images.length) {
        for (let i = localConfig.gallery.images.length; i < num; i++) {
            localConfig.gallery.images.push({ src: "", cap: "" });
        }
    } else {
        localConfig.gallery.images = localConfig.gallery.images.slice(0, num);
    }
    markSectionDirty('section-gallery', "Valider la galerie");
    checkGalleryValidity();
    sync();
}
function handleGalleryImage(input, index) {
    if (input.files && input.files[0]) processGalleryFile(input.files[0], index);
}
function handleGalleryDrop(event, index) {
    event.preventDefault();
    const dropZone = document.getElementById(`drop-zone-gal-${index}`);
    if (dropZone) dropZone.classList.remove('border-[#8449d9]', 'bg-slate-50');
    if (event.dataTransfer.files && event.dataTransfer.files[0]) processGalleryFile(event.dataTransfer.files[0], index);
}
function processGalleryFile(file, index) {
    processFile(file, (webpData) => {
        if (!localConfig.gallery.images[index]) localConfig.gallery.images[index] = { src: "", cap: "" };
        localConfig.gallery.images[index].src = webpData;
        updateGalleryImageUI(index, webpData);
        markSectionDirty('section-gallery', "Valider la galerie");
        checkGalleryValidity();
        sync();
    });
}
function updateGalleryImageUI(index, data) {
    const preview = document.getElementById(`preview-img-gal-${index}`);
    const placeholder = document.getElementById(`upload-placeholder-gal-${index}`);
    const trashBtn = document.getElementById(`trash-btn-gal-${index}`);
    const dropZone = document.getElementById(`drop-zone-gal-${index}`);
    if (data && data !== "") {
        if (preview) { preview.src = data; preview.classList.remove('hidden'); }
        if (placeholder) placeholder.classList.add('hidden');
        if (trashBtn) trashBtn.classList.remove('hidden');
        if (dropZone) dropZone.classList.add('border-green-400', 'border-solid');
    } else {
        if (preview) { preview.src = ""; preview.classList.add('hidden'); }
        if (placeholder) placeholder.classList.remove('hidden');
        if (trashBtn) trashBtn.classList.add('hidden');
        if (dropZone) dropZone.classList.remove('border-green-400', 'border-solid');
    }
}
function clearGalleryImage(index) {
    if (localConfig.gallery.images[index]) localConfig.gallery.images[index].src = "";
    updateGalleryImageUI(index, "");
    markSectionDirty('section-gallery', "Valider la galerie");
    checkGalleryValidity();
    sync();
}
function updateGalleryCaption(index, value) {
    if (localConfig.gallery.images[index]) { localConfig.gallery.images[index].cap = value; 
        markSectionDirty('section-gallery', "Valider la galerie");
        checkGalleryValidity();
        sync(); }
}
// --- LOGIQUE DÉDIÉE À LA SECTION A PROPOS ---
function handleAboutDrop(event) {
    event.preventDefault();
    document.getElementById('drop-zone-about')?.classList.remove('border-[#8449d9]', 'bg-slate-50');
    if (event.dataTransfer.files && event.dataTransfer.files[0]) processAboutFile(event.dataTransfer.files[0]);
}
function handleAboutImage(input) {
    if (input.files && input.files[0]) processAboutFile(input.files[0]);
}
function processAboutFile(file) {
    processFile(file, (webpData) => {
        if (!localConfig.about) localConfig.about = {};
        localConfig.about.img = webpData; 
        updateAboutImageUI(webpData);
        markSectionDirty('section-about', "Valider l'à propos'");
        checkAboutValidity();
        sync(); 
    });
}
function updateAboutImageUI(data) {
    const preview = document.getElementById('preview-img-about');
    const placeholder = document.getElementById('upload-placeholder-about');
    const trashBtn = document.getElementById('trash-btn-about');
    if (data && data !== "") {
        if (preview) { preview.src = data; preview.classList.remove('hidden'); }
        if (placeholder) placeholder.classList.add('hidden');
        if (trashBtn) trashBtn.classList.remove('hidden');
    } else {
        if (preview) { preview.src = ""; preview.classList.add('hidden'); }
        if (placeholder) placeholder.classList.remove('hidden');
        if (trashBtn) trashBtn.classList.add('hidden');
    }
}
function clearAboutImage() {
    if (localConfig.about) localConfig.about.img = ""; 
    document.getElementById('about-img-upload').value = "";
    updateAboutImageUI("");
    markSectionDirty('section-about', "Valider l'à propos'");
    checkSAboutValidity();
    sync();
}
// --- LOGIQUE DÉDIÉE À LA SECTION INFOS PRATIQUES ---
// --- IMAGE ---
function handlePracticalImage(input) {
    if (input.files && input.files[0]) {
        processFile(input.files[0], (webpData) => {
            const preview = document.getElementById('preview-img-practical');
            const placeholder = document.getElementById('upload-placeholder-practical');
            const trashBtn = document.getElementById('trash-btn-practical');
            if(preview) { preview.src = webpData; preview.classList.remove('hidden'); }
            if(placeholder) placeholder.classList.add('hidden');
            if(trashBtn) trashBtn.classList.remove('hidden');
            localConfig.practical.hoursImg = webpData;
            markSectionDirty('section-practical', "Valider les infos"); 
            checkPracticalValidity(); 
            sync();
        });
    }
}
function handlePracticalDrop(e) {
    e.preventDefault();
    document.getElementById('drop-zone-practical')?.classList.remove('border-[#8449d9]', 'bg-slate-50');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const input = document.getElementById('hours-img-up');
        const dt = new DataTransfer();
        dt.items.add(e.dataTransfer.files[0]);
        if(input) { input.files = dt.files; handlePracticalImage(input); }
    }
}
function clearPracticalImage() {
    const preview = document.getElementById('preview-img-practical');
    const placeholder = document.getElementById('upload-placeholder-practical');
    const trashBtn = document.getElementById('trash-btn-practical');
    if(preview) { preview.src = ""; preview.classList.add('hidden'); }
    if(placeholder) placeholder.classList.remove('hidden');
    if(trashBtn) trashBtn.classList.add('hidden');
    document.getElementById('hours-img-up').value = "";
    localConfig.practical.hoursImg = "";
    markSectionDirty('section-practical', "Valider les infos"); 
    checkPracticalValidity(); 
    sync();
}
// --- INFOS ---
const fixedLabels = ["Lun - Ven", "Samedi", "Dimanche"];
const hoursState = [
    { open: true, continuous: false, mStart: '', mEnd: '', aStart: '', aEnd: '', start: '', end: '' },
    { open: true, continuous: false, mStart: '', mEnd: '', aStart: '', aEnd: '', start: '', end: '' },
    { open: true, continuous: false, mStart: '', mEnd: '', aStart: '', aEnd: '', start: '', end: '' }
];
function initPracticalDefaults() {
    if (!localConfig.practical) localConfig.practical = {};
    
    if (localConfig.practical.show === undefined) {
        localConfig.practical.show = false;
    }
    localConfig.practical.title = "Infos Pratiques";
    localConfig.practical.locationTitle = "Notre Emplacement";
    localConfig.practical.hoursTitle = "Nos Horaires";
    localConfig.practical.mapBtnLabel = "Voir l'itinéraire";
    localConfig.practical.displayMode = localConfig.practical.displayMode || 'text';
    localConfig.practical.showMapBtn = localConfig.practical.showMapBtn !== undefined ? localConfig.practical.showMapBtn : true;
    
    if (!localConfig.practical.hoursItems) {
        localConfig.practical.hoursItems = fixedLabels.map(l => ({ label: l, time: "—" }));
    }
    const isEnabled = localConfig.practical.show;
    const mainToggle = document.getElementById('toggle-practical');
    if (mainToggle) mainToggle.checked = isEnabled;

    const infoCard = document.getElementById('practical-info-card');
    const fieldsContainer = document.getElementById('practical-content'); 

    if (isEnabled) {
        infoCard?.classList.add('hidden');
        fieldsContainer?.classList.remove('hidden');
    } else {
        infoCard?.classList.remove('hidden');
        fieldsContainer?.classList.add('hidden');
    }
    if (typeof toggleSectionVisibility === "function") {
        toggleSectionVisibility('practical', isEnabled);
    }
}
function togglePracticalSectionVisibility(isEnabled) {
    localConfig.practical.show = isEnabled;
    const infoCard = document.getElementById('practical-info-card');
    const fieldsContainer = document.getElementById('practical-content');

    if (isEnabled) {
        infoCard?.classList.add('hidden');
        fieldsContainer?.classList.remove('hidden');
    } else {
        infoCard?.classList.remove('hidden');
        fieldsContainer?.classList.add('hidden');
    }
    if (typeof toggleSectionVisibility === "function") {
        toggleSectionVisibility('practical', isEnabled);
    }
    markSectionDirty('section-practical', "Valider les infos"); 
    checkPracticalValidity(); 
    sync();
}
function formatHour(input) {
    let v = input.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + ":" + v.slice(2);
    input.value = v;
}
function toggleDayOpen(i, isOpen) {
    hoursState[i].open = isOpen;
    const block = document.querySelector(`.day-block[data-index="${i}"]`);
    if(!block) return;

    const splitView = block.querySelector(".day-split");
    const contView = block.querySelector(".day-continuous");
    const closedView = block.querySelector(".day-closed");

    if (!isOpen) {
        splitView?.classList.add("hidden");
        contView?.classList.add("hidden");
        closedView?.classList.remove("hidden");
    } else {
        closedView?.classList.add("hidden");
        if (hoursState[i].continuous) {
            contView?.classList.remove("hidden");
            splitView?.classList.add("hidden");
        } else {
            splitView?.classList.remove("hidden");
            contView?.classList.add("hidden");
        }
    }
    syncHours(i);
}
function toggleContinuous(i, isContinuous) {
    hoursState[i].continuous = isContinuous;
    const block = document.querySelector(`.day-block[data-index="${i}"]`);
    if(!block) return;

    const splitView = block.querySelector(".day-split");
    const contView = block.querySelector(".day-continuous");

    if (isContinuous) {
        splitView?.classList.add("hidden");
        contView?.classList.remove("hidden");
    } else {
        splitView?.classList.remove("hidden");
        contView?.classList.add("hidden");
    }
    syncHours(i);
}
function updateSplit(i, key, val) {
    hoursState[i][key] = val;
    syncHours(i);
}
function updateContinuous(i, key, val) {
    hoursState[i][key] = val;
    syncHours(i);
}
function syncHours(i) {
    const d = hoursState[i];
    let display = "Fermé";
    if (d.open) {
        if (d.continuous) {
            display = (d.start && d.end) ? `${d.start} - ${d.end}` : "—";
        } else {
            const matin = (d.mStart && d.mEnd) ? `${d.mStart} - ${d.mEnd}` : "";
            const aprem = (d.aStart && d.aEnd) ? `${d.aStart} - ${d.aEnd}` : "";
            if (matin && aprem) {
                display = `${matin} / ${aprem}`;
            } else {
                display = "—";
            }
        }
    }
    localConfig.practical.hoursItems[i] = {
        label: fixedLabels[i],
        time: display
    };
    markSectionDirty('section-practical', "Valider les infos");
    checkPracticalValidity();
    sync(); 
}
function updateAddressPart(part, value) {
    if (!window.currentAddr) window.currentAddr = { street: "", zip: "", city: "" };
    window.currentAddr[part] = value;
    const { street, zip, city } = window.currentAddr;
    localConfig.practical.address = `${street}, ${zip} ${city}`.trim().replace(/^, /, "").replace(/\s+/g, ' ');
    markSectionDirty('section-practical', "Valider les infos");
    checkPracticalValidity();
    sync();
}
function updatePracticalCta(show) {
    localConfig.practical.showMapBtn = show;
    markSectionDirty('section-practical', "Valider les infos");
    checkPracticalValidity();
    sync();
}
function setPracticalMode(mode) {
    localConfig.practical.displayMode = mode;
    const btnText = document.getElementById('btn-practical-text');
    const btnImg = document.getElementById('btn-practical-image');
    const textZone = document.getElementById('hours-text-inputs');
    const imageZone = document.getElementById('hours-image-upload');
    if (mode === 'text') {
        btnText?.classList.add('bg-white', 'shadow-sm', 'text-[#8449d9]');
        btnImg?.classList.remove('bg-white', 'shadow-sm', 'text-[#8449d9]');
        textZone?.classList.remove('hidden');
        imageZone?.classList.add('hidden');
    } else {
        btnImg?.classList.add('bg-white', 'shadow-sm', 'text-[#8449d9]');
        btnText?.classList.remove('bg-white', 'shadow-sm', 'text-[#8449d9]');
        imageZone?.classList.remove('hidden');
        textZone?.classList.add('hidden');
    }
    markSectionDirty('section-practical', "Valider les infos"); 
    checkPracticalValidity(); 
    sync();
}
// --- LOGIQUE DÉDIÉE À LA SECTION FAQ ---
function toggleSectionVisibility(section, isVisible) {
    let configKey, fieldsId, sectionId, label;
    if (section === 'avis' || section === 'testimonials') {
        configKey = 'testimonials';
        fieldsId  = 'testimonials-editor-content';
        sectionId = 'section-avis';
        label     = "Valider les avis";
    } 
    else if (section === 'faq') {
        configKey = 'faq';
        fieldsId  = 'faq-editor-content'; 
        sectionId = 'section-faq';
        label     = "Valider la FAQ";
    }
    if (!localConfig[configKey]) localConfig[configKey] = {};
    localConfig[configKey].show = isVisible;
    const fieldsEl = document.getElementById(fieldsId);
    if (fieldsEl) {
        fieldsEl.style.opacity = isVisible ? "1" : "0.3";
        fieldsEl.style.pointerEvents = isVisible ? "auto" : "none";
    }
    if (isVisible && localConfig.steps) {
        localConfig.steps[sectionId] = false;
    }
    markSectionDirty(sectionId, label);
    if (section === 'faq') {
        checkFaqValidity();
    } else {
        checkTestimonialsValidity();
    } 
    sync();
}
function updateFaqDisplayCount(count) {
    const selectedCount = parseInt(count);
    if (!localConfig.faq) localConfig.faq = { show: true, title: "Questions fréquentes", items: [], displayCount: 3 };
    localConfig.faq.displayCount = selectedCount;

    for (let i = 0; i < 5; i++) {
        const el = document.getElementById(`faq-item-${i}`);
        if (!el) continue;
        if (i < selectedCount) el.classList.remove('hidden');
        else el.classList.add('hidden');
    }
    markSectionDirty('section-faq', "Valider la faq");
    if (localConfig.steps) localConfig.steps['section-faq'] = false;
    checkFaqValidity();
    sync();
}
function updateFAQ(index, key, value) {
    if (!localConfig.faq) localConfig.faq = { show: true, title: "Questions fréquentes", items: [] };
    if (!localConfig.faq.items) localConfig.faq.items = [];
    if (!localConfig.faq.items[index]) localConfig.faq.items[index] = { q: "", a: "" };

    localConfig.faq.items[index][key] = value;

    checkFaqValidity(); 
    markSectionDirty('section-faq', "Valider la faq");
    sync();
}
// --- LOGIQUE DÉDIÉE À LA SECTION CONTACT ---
const COUNTRY_DATA = {
    "FR": { prefix: "+33", label: "Numéro français (+33)", placeholder: "06 12 34 56 78", img: "https://flagcdn.com/w40/fr.png" },
    "BE": { prefix: "+32", label: "Numéro belge (+32)", placeholder: "0470 12 34 56", img: "https://flagcdn.com/w40/be.png" },
    "LU": { prefix: "+352", label: "Numéro luxembourgeois (+352)", placeholder: "621 123 456", img: "https://flagcdn.com/w40/lu.png" }
};
function updateContactData(key, value) {
    if (!localConfig.contact) localConfig.contact = {};
    localConfig.contact[key] = value;
    if (key === 'ctaLabel') {
        if (!localConfig.header) localConfig.header = {};
    }
    checkContactValidity(); 
    markSectionDirty('section-contact', "Valider le contact");
    sync();
}
function handleCtaLabelChange(val) {
    const customInput = document.getElementById('custom-cta-label');
    if (val === 'custom') {
        customInput.classList.remove('hidden');
        updateContactData('ctaLabel', customInput.value);
    } else {
        customInput.classList.add('hidden');
        updateContactData('ctaLabel', val);
    }
}
function toggleFlagDropdown() {
    document.getElementById('flag-dropdown-list').classList.toggle('hidden');
}
function handleCountryChange(iso) {
    if (!localConfig.contact) localConfig.contact = {};
    const data = COUNTRY_DATA[iso];
    localConfig.contact.countryPrefix = data.prefix;
    localConfig.contact.countryIso = iso;
    document.getElementById('selected-flag-img').src = data.img;
    const label = document.getElementById('label-cta-value');
    const input = document.getElementById('cta-value-input');
    if (localConfig.contact.type === 'tel') {
        label.innerText = data.label;
        input.placeholder = data.placeholder;
    }
    document.getElementById('flag-dropdown-list').classList.add('hidden');
    sync();
}
function handleCtaTypeChange(type) {
    const input = document.getElementById('cta-value-input');
    const label = document.getElementById('label-cta-value');
    const combo = document.getElementById('tel-flag-combo');
    if (!localConfig.contact) localConfig.contact = {};
    localConfig.contact.type = type;
    if (type === 'tel') {
        combo.classList.remove('hidden');
        input.classList.add('!rounded-l-none');
        const currentIso = localConfig.contact.countryIso || 'FR';
        handleCountryChange(currentIso);
    } else {
        combo.classList.add('hidden');
        input.classList.remove('!rounded-l-none');
        label.innerText = type === 'email' ? "Adresse Email" : "Lien du bouton";
        input.placeholder = type === 'email' ? "contact@exemple.com" : "https://...";
    }
    checkContactValidity(); 
    markSectionDirty('section-contact', "Valider le contact");
    sync();
}
window.addEventListener('click', function(e) {
    const combo = document.getElementById('tel-flag-combo');
    const list = document.getElementById('flag-dropdown-list');
    if (combo && !combo.contains(e.target)) {
        list?.classList.add('hidden');
    }
});
// --- LOGIQUE DEDIEE AUX METADATA ---
function updateMeta(key, value) {
    if (!localConfig.meta) localConfig.meta = {};
    localConfig.meta[key] = value;
    if (key === 'title') {
        const previewTitle = document.getElementById('preview-google-title');
        if (previewTitle) {
            previewTitle.textContent = value || "Vitrine pop - Votre Nom";
        }
    }
    if (key === 'description') {
        const previewDesc = document.getElementById('preview-google-desc');
        if (previewDesc) {
            previewDesc.textContent = value || "La meta description (160 caractères max) sert à donner envie de cliquer sur ton site depuis Google...";
        }
    }
    markSectionDirty('section-seo', "Valider le seo");
    checkMetaValidity(); 
    sync();
}
// --- LOGIQUE FOOTER, LEGAL & HÉBERGEMENT ---
const LEGAL_LABELS = {
    "FR": { pro: ["SIREN", "SIRET"], asso: ["Numéro RNA", "SIREN (facultatif)"] },
    "BE": { pro: ["Numéro BCE", "TVA (si diff.)"], asso: ["Numéro BCE", "N° d'unité"] },
    "LU": { pro: ["Numéro RCS", "Numéro de matricule"], asso: ["Numéro RCS", "N° d'inscription"] }
};
let tempSocialLinks = {
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/"
};
let currentLegalCountry = "FR";
let currentEntityType = "pro";
// --- GESTION DES RESEAUX SOCIAUX ---
function updateSocials(key, value) {
    if (!localConfig.socials) localConfig.socials = {};
    localConfig.socials[key] = value;
    if (key !== 'title') tempSocialLinks[key] = value;
    markSectionDirty('section-social', "Valider mes réseaux");
    checkSocialsValidity(); 
    sync();
}
function handleSocialToggle(key, isVisible) {
    if (!localConfig.socials) localConfig.socials = {};
    const input = document.getElementById(`input-social-${key}`);
    localConfig.socials[key] = isVisible ? (input.value || tempSocialLinks[key] || "https://") : "";
    localConfig.socials[key] = isVisible ? (input.value || "https://") : "";
    markSectionDirty('section-social', "Valider mes réseaux");
    if (localConfig.steps) {
        localConfig.steps['section-social'] = false; 
    }
    checkSocialsValidity(); 
    sync();
}
// --- GESTION DES INFOS LEGALES ---
function handleEntityType(type) {
    if (!localConfig.legal) localConfig.legal = {};
    localConfig.legal.entityType = type;
    const warning = document.getElementById('warning-particulier');
    const fieldsContainer = document.getElementById('legal-fields-container');
    const btnValidate = document.getElementById('btn-validate-legal');
    const companyInput = document.getElementById('id-company-name');
    if (type === 'particulier') {
        if (warning) {
            warning.querySelector('p').textContent = "La configuration est réservée aux entreprises et associations.";
            warning.classList.remove('hidden');
        }
        if (fieldsContainer) fieldsContainer.classList.add('hidden');
        if (btnValidate) btnValidate.classList.add('hidden');
    } else {
        if (warning) warning.classList.add('hidden');
        if (fieldsContainer) fieldsContainer.classList.remove('hidden');
        if (btnValidate) btnValidate.classList.remove('hidden');
        if (companyInput) {
            companyInput.placeholder = (type === 'asso') ? "Nom de l'association" : "Raison Sociale";
        }
        handleLegalCountryChange(localConfig.legal.country || 'FR');
    }
    checkLegalValidity();
}
function handleLegalCountryChange(countryCode) {
    if (!localConfig.legal) localConfig.legal = {};
    localConfig.legal.country = countryCode;
    const flagImg = document.getElementById('legal-flag-img');
    if (flagImg) flagImg.src = `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
    const id1 = document.getElementById('id-1');
    const id2 = document.getElementById('id-2');
    const type = localConfig.legal.entityType || 'pro';
    if (countryCode === 'FR') {
        id1.placeholder = (type === 'asso') ? "N° RNA" : "SIRET";
        id2.placeholder = (type === 'pro') ? "SIREN" : "SIRET (si applicable)";
    } else if (countryCode === 'BE') {
        id1.placeholder = "BCE - N° d'entreprise";
        id2.placeholder = "N° de TVA";
    } else if (countryCode === 'LU') {
        id1.placeholder = "N° RCS";
        id2.placeholder = "N° Matricule";
    }
    markSectionDirty('section-legale', "Valider les informations");
    checkLegalValidity();
    sync();
}
function updateLegal(key, val) {
    if (!localConfig.legal) {
        localConfig.legal = {
            firstName: "",
            lastName: "",
            legalName: "",
            address: "",
            id1: "",
            id2: "",
            contactValue: ""
        };
    }
    localConfig.legal[key] = val;
    if (key === 'email') {
        try {
            localConfig.legal.contactValue = btoa(val);
        } catch(e) {
            localConfig.legal.contactValue = val;
        }
    }
    markSectionDirty('section-legale', "Valider les informations");
    checkLegalValidity();
    sync(); 
}
// --- UPDATE LINKEDIN KIT ---
function updateLinkedinKit(key, value) {
    if (!localConfig.linkedinKit) localConfig.linkedinKit = {};
    localConfig.linkedinKit[key] = value;
    checkLinkedinValidity();
    markSectionDirty('section-linkedin-kit', "Valider mon kit linkedin");
    sync();
}
// --- UPDATE FIGURE ---
function updateLinkedinFigure(index, value) {
    if (!localConfig.linkedinKit) localConfig.linkedinKit = {};
    if (!localConfig.linkedinKit.figures) localConfig.linkedinKit.figures = [{label:""},{label:""},{label:""}];
    localConfig.linkedinKit.figures[index] = { label: value };
    markSectionDirty('section-linkedin-kit', "Valider mon kit linkedin");
    checkLinkedinValidity();
    sync();
}
function handleLinkedinCtaChange(vignette, val) {
    const field = (vignette === 'v1') ? 'vignette1Cta' : 'vignette2Cta';
    updateLinkedinKit(field, val);
    markSectionDirty('section-linkedin-kit', "Valider mon kit linkedin");
    checkLinkedinValidity();
    sync();
}
function handleLinkedinEntity(type) {
    if (!localConfig.linkedinKit) localConfig.linkedinKit = {};
    localConfig.linkedinKit.entityType = type;
    const warning = document.getElementById('warning-linkedin-particulier');
    const fullSection = document.getElementById('section-linkedin-kit'); 
    if (type === 'particulier') {
        if (warning) warning.classList.remove('hidden');
        if (fullSection) fullSection.classList.add('hidden');
    } else {
        if (warning) warning.classList.add('hidden');
        if (fullSection) fullSection.classList.remove('hidden');
    }
    sync();
}
// ----------- LOGIQUE DE VALIDATION ET ADAPTATION -------------
// --- MARQUE UNE SECTION COMME GRISE OU A VALIDER ---
function checkSectionValidity(sectionId, isValid) {
    const btn = document.querySelector(`#${sectionId} .btn-save-step`);
    if (!btn) return;
    if (isValid) {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        btn.style.pointerEvents = "auto";
    } else {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        btn.style.pointerEvents = "none";
    }
}
// --- MARQUE UNE SECTION COMME MODIFIÉE ---
function markSectionDirty(sectionId, defaultLabel) {
    const btn = document.querySelector(`#${sectionId} .btn-save-step`);
    if (btn) {
        btn.classList.remove('btn-validated-status'); 
        btn.innerText = defaultLabel;                                  
    }
}
// --- IDENTITE VISUELLE ---
function getIdentiteBtn() {
    return document.querySelector('#section-identite .btn-save-step');
}
function checkIdentiteValidity() {
    const btn = document.getElementById('btn-validate-identite');
    if (!btn) return;
    const noLogo = localConfig.header?.useTextOnly;
    const hasLogoImg = !!localConfig.header?.logo;
    const companyName = (localConfig.header?.companyName || "").trim();
    let isValid = false;
    if (companyName.length > 0) {
        if (noLogo || hasLogoImg) {
            isValid = true;
        }
    }
    if (isValid) {
        btn.disabled = false;
        btn.classList.remove('opacity-40', 'pointer-events-none');
    } else {
        btn.disabled = true;
        btn.classList.add('opacity-40', 'pointer-events-none');
    }
}
function resetIdentiteValidation() {
    const btn = getIdentiteBtn();
    if (!btn) return;
    const validated = localConfig.steps?.['header'];
    const dirty = localConfig.header?.dirty;
    if (validated && !dirty) {
        // Vert
        btn.classList.add('btn-validated-status');
        btn.innerText = "✓ Validé";
    } else {
        // Violet
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider l'identité visuelle";
    }
}
function validateIdentite() {
    if (!localConfig.steps) localConfig.steps = {};
    localConfig.steps['section-identite'] = true;
    if (!localConfig.header) localConfig.header = {};
    localConfig.header.dirty = false;
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    resetIdentiteValidation();
}
// --- ACCUEIL ---
function adaptUIForTemplate(templateId) {
    const tmpl = TEMPLATES_DB.find(t => t.id === templateId);
    if (!tmpl) return;
    const heroImageZone = document.getElementById('drop-zone-hero')?.closest('.input-group');
    if (heroImageZone) {
        if (tmpl.hasHeroImg) {
            heroImageZone.classList.remove('hidden');
        } else {
            heroImageZone.classList.add('hidden');
        }
    }
    checkAccueilValidity();
}
function checkAccueilValidity() {
    const btn = document.querySelector('#section-accueil .btn-save-step');
    if (!btn) return;
    const h = localConfig.hero || {};
    const steps = localConfig.steps || {};
    if (steps['section-accueil'] === true) {
        btn.disabled = false;
        btn.classList.add('btn-validated-status');
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        btn.innerText = "✓ Validé";
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        return;
    }
// --- DEFAULTS ---
    const defaults = {
        title: "Ton titre principal",
        desc: "Explique en une phrase ce que tu fais, pour qui, et le bénéfice principal. Simple, concret, sans jargon technique. Si on ne comprend pas en 5 secondes, simplifie.",
        nums: ["150+", "10", "99%"],
        labels: ["PROJETS RÉALISÉS", "ANNÉES d'EXPERTISE", "CLIENTS SATISFAITS"]
    };
// --- CHAMPS TEXTE ---
    const titleOk = h.title && h.title.trim() !== "" && h.title !== defaults.title;
    const descOk  = h.desc && h.desc.trim() !== "" && h.desc !== defaults.desc;
    const ctaOk   = h.ctaLabel && h.ctaLabel.trim() !== "";
// --- FIGURES ---
    let figuresOk = true;
    const toggleEl = document.getElementById('toggle-figures');
    if (toggleEl && toggleEl.checked) {
        if (!h.figures || h.figures.length < 3) {
            figuresOk = false;
        } else {
            figuresOk = h.figures.every((f, i) => {
                const n = f.num ? f.num.toString().trim() : "";
                const l = f.label ? f.label.toString().trim() : "";
                return n !== "" && l !== "" && n !== defaults.nums[i] && l !== defaults.labels[i];
            });
        }
    }
// --- IMAGE HERO ---
    const tmpl = TEMPLATES_DB.find(t => t.id === localConfig.meta?.template);
    const needsHeroImg = tmpl ? tmpl.hasHeroImg : true;
    const imgOk = !needsHeroImg || (h.img && h.img !== "");
// --- DÉCISION FINALE ---
    if (titleOk && descOk && ctaOk && figuresOk && imgOk) {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed', 'btn-validated-status');
        btn.innerText = "Valider l'accueil";
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    } else {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        btn.classList.remove('btn-validated-status');
        btn.innerText = "Valider l'accueil";
        btn.style.opacity = "0.5";
        btn.style.pointerEvents = "none";
    }
}
// --- RESET / UPDATE VISUEL DU BOUTON HERO ---
function resetAccueilValidation() {
    const btn = document.querySelector('#section-accueil .btn-save-step');
    if (!btn) return;
    const validated = localConfig.steps?.['section-accueil'];
    const dirty = localConfig.hero?.dirty;
    if (validated && !dirty) {
        btn.classList.add('btn-validated-status');
        btn.classList.remove('bg-[#8449d9]');
        btn.innerText = '✓ Validé';
    } else {
        btn.classList.remove('btn-validated-status');
        btn.classList.add('bg-[#8449d9]');
        btn.innerText = 'Valider laccueil';
    }
}
// --- VALIDATION DE LA SECTION HERO ---
function validateHero() {
    if (!localConfig.steps) localConfig.steps = {};
    localConfig.steps['section-accueil'] = true;
    if (!localConfig.hero) localConfig.hero = {};
    localConfig.hero.dirty = false; 
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    resetAccueilValidation();
}
// --- SERVICES ---
const SERVICES_DEFAULTS = {
    title: "Nos solutions",
    items: [
        {
        h3: "Serv 1",
        p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client."
        },
        {
        h3: "Serv 2",
        p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client."
        },
        {
        h3: "Serv 3",
        p: "Présente ici un service clé ou un bénéfice majeur. Explique ce que tu fais, pour qui, et ce que ça change pour ton client."
        }
    ]
};
function checkServicesValidity() {
    const s = localConfig.services || {};
    const items = s.items || [];
    let isValid = true;
    if (!s.title || s.title.trim() === "" || s.title === SERVICES_DEFAULTS.title) {
        isValid = false;
    }
    items.forEach((item, i) => {
        const def = SERVICES_DEFAULTS.items[i];
        if (
            !item.h3 || item.h3.trim() === "" || item.h3 === def.h3 ||
            !item.p  || item.p.trim()  === "" || item.p  === def.p
        ) {
            isValid = false;
        }
        if (item.showPrice && (!item.price || item.price.trim() === "")) {
            isValid = false;
        }

        if (item.showPrefix && (!item.prefix || item.prefix.trim() === "")) {
            isValid = false;
        }
    });
    checkSectionValidity('section-services', isValid);
}
// --- AVIS ---
const TESTIMONIALS_DEFAULTS = {
    title: "Ce que nos clients disent",
    ctaText: "Et si vous étiez le prochain ?",
    items: [
        { stars: "5", text: "", name: "", role: "" },
        { stars: "5", text: "", name: "", role: "" },
        { stars: "5", text: "", name: "", role: "" }
    ]
};
function checkTestimonialsValidity() {
    const t = localConfig.testimonials || {};
    const items = t.items || [];
    if (t.show === false) {
        checkSectionValidity('section-avis', true);
        return;
    }
    let isValid = true;
    if (!t.title || t.title.trim() === "" || t.title === TESTIMONIALS_DEFAULTS.title) {
        isValid = false;
    }
    if (!t.ctaText || t.ctaText.trim() === "" || t.ctaText === TESTIMONIALS_DEFAULTS.ctaText) {
        isValid = false;
    }
    items.forEach((item) => {
        if (
            !item.text || item.text.trim() === "" ||
            !item.name || item.name.trim() === "" ||
            !item.role || item.role.trim() === ""
        ) {
            isValid = false;
        }
    });
    checkSectionValidity('section-avis', isValid);
}
// --- GALLERY ---
const GALLERY_DEFAULTS = {
    title: "Des résultats concrets",
    images: [
        { src: "", cap: "Témoignage client : [Prénom], [métier/statut] : ‘[Phrase courte sur ce qu’ils ont aimé ou le résultat]" },
        { src: "", cap: "Projet / réalisation : [Nom du projet] pour [client/secteur] – [bénéfice principal ou usage]" },
        { src: "", cap: "Bénéfice / avant‑après : [Produit/service réalisé] – aide [client/secteur] à [résultat principal]" }
    ]
};
function checkGalleryValidity() {
    const g = localConfig.gallery || {};
    const images = g.images || [];
    let isValid = true;
    if (!g.title || g.title.trim() === "" || g.title === GALLERY_DEFAULTS.title) {
        isValid = false;
    }
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        if (
            !img ||
            !img.src || img.src.trim() === "" ||
            !img.cap || img.cap.trim() === "" ||
            (GALLERY_DEFAULTS.images[i] && img.cap.trim() === GALLERY_DEFAULTS.images[i].cap)
        ) {
            isValid = false;
            break;
        }
    }
    checkSectionValidity('section-gallery', isValid);
}
// --- ABOUT ---
const ABOUT_DEFAULTS = {
    title: "Qui sommes nous",
    desc: "Racontez en quelques phrases qui vous êtes et ce que vous faites. Vous pouvez : vous présenter individuellement (votre rôle, votre approche, vos forces) ; présenter votre équipe (qui fait quoi, vos expertises) ; ou expliquer votre concept / votre société (mission, valeur ajoutée, bénéfices pour vos clients). Soyez clair, simple et engageant : l’objectif est que quelqu’un comprenne votre activité en 5 secondes.",
    img: ""
};
function checkAboutValidity() {
    const a = localConfig.about || {};
    let isValid = true;
    if (!a.title || a.title.trim() === "" || a.title === ABOUT_DEFAULTS.title) isValid = false;
    if (!a.desc  || a.desc.trim()  === "" || a.desc  === ABOUT_DEFAULTS.desc)  isValid = false;
    if (!a.img || a.img.trim() === "") isValid = false;
    checkSectionValidity('section-about', isValid);
}
// --- PRACTICAL ---
function checkPracticalValidity() {
    const p = localConfig.practical || {};
    const btn = document.querySelector('#section-practical .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-practical'] === true) return;
    if (p.show === false) {
        checkSectionValidity('section-practical', true);
        return;
    }
    let isValid = true;
    const defaultAddr = "123 Rue de la Réussite, 75000 Paris";
    if (!p.address || p.address.trim() === "" || p.address === defaultAddr) {
        isValid = false;
    }
    if (p.showMapBtn !== false) {
        const defaultMap = "https://goo.gl/maps/...";
        if (!p.mapsLink || p.mapsLink.trim() === "" || p.mapsLink === defaultMap) {
            isValid = false;
        }
    }
    if (p.displayMode === 'text') {
        const forbiddenDefaults = ["09:00 - 18:00", "10:00 - 14:00"]; 
        if (!p.hoursItems || p.hoursItems.length < 3) {
            isValid = false;
        } else {
            const allItemsFilled = p.hoursItems.every((item) => {
                const t = (item.time || "").trim();
                if (t === "—" || t === "") return false;
                if (forbiddenDefaults.includes(t)) return false;
                return true;
            });

            if (!allItemsFilled) isValid = false;
        }
    } else {
        if (!p.hoursImg || p.hoursImg.trim() === "") isValid = false;
    }
    checkSectionValidity('section-practical', isValid);
}
// --- FAQ ---
function checkFaqValidity() {
    const btn = document.querySelector('#section-faq .btn-save-step');
    if (!btn) return;
    const f = localConfig.faq || {};
    if (f.show === false) {
        checkSectionValidity('section-faq', true);
        return; 
    }
    if (localConfig.steps && localConfig.steps['section-faq'] === true) return;
    const defaultQs = [
        "Est-ce que ooooooooooooooooooooooo ?",
        "Comment ooooooooooooooooooooooooooo ?",
        "En combien de temps ooooooooooooooooooooo ?",
        "Puis-je adapter oooooooooooooooooooo ?",
        "Comment ooooooooooooooooooooooooooo ?"
    ];
    const defaultAs = [
        "Explique à qui s’adresse ton service (type de client, situation, besoin principal) et dans quels cas c’est idéal. Tu peux aussi préciser pour qui ce n’est pas forcément adapté.",
        "Décris les grandes étapes simplement : premier contact, échange ou diagnostic, réalisation, livraison ou suivi. Rassure sur la clarté et la simplicité du process.",
        "Indique un délai réaliste : mise en place, livraison, premiers effets visibles. Si ça dépend de certains facteurs, précise lesquels sans entrer dans le technique.",
        "Explique ce qui est modifiable, évolutif ou personnalisable dans le temps, et dans quelles conditions (ajustements, options, accompagnement, etc.).",
        "Explique clairement l’action à faire ensuite : prise de rendez-vous, formulaire, appel, message. Rassure sur le fait que le premier échange est simple et sans engagement."
    ];
    let isValid = true;
    if (!f.title || f.title.trim() === "" || f.title === "Questions fréquentes") {
        isValid = false;
    }
    const countToDisplay = parseInt(f.displayCount || 3);
    for (let i = 0; i < countToDisplay; i++) {
        const item = (f.items && f.items[i]) ? f.items[i] : null;
        if (!item || !item.q || !item.a) {
            isValid = false;
            break;
        }
        const qVal = item.q.trim();
        const aVal = item.a.trim();
        if (qVal === "" || aVal === "" || qVal === defaultQs[i] || aVal === defaultAs[i]) {
            isValid = false;
            break; 
        }
    }
    checkSectionValidity('section-faq', isValid);
}
// --- CONTACT ---
function checkContactValidity() {
    const c = localConfig.contact || {};
    const btn = document.querySelector('#section-contact .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-contact'] === true) return;
    const defaults = {
        title: "Parlons de votre projet",
        desc: "Explique ici comment on te contacte", 
        value: "https://votre-url-ici"
    };
    let isValid = true;
    if (!c.title || c.title.trim() === "" || c.title === defaults.title) {
        isValid = false;
    }
    if (!c.desc || c.desc.trim() === "" || c.desc.includes(defaults.desc)) {
        isValid = false;
    }
    if (!c.ctaLabel || c.ctaLabel.trim() === "" || c.ctaLabel === "Saisir") {
        isValid = false;
    }
    if (!c.value || c.value.trim() === "" || c.value === defaults.value) {
        isValid = false;
    }
    if (!c.type || c.type.trim() === "") {
        isValid = false;
    }
    checkSectionValidity('section-contact', isValid);
}
// --- SOCIALS ---
function checkSocialsValidity() {
    const s = localConfig.socials || {};
    const btn = document.querySelector('#section-social .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-social'] === true) return;
    const fbOn = document.getElementById('toggle-social-facebook')?.checked;
    const liOn = document.getElementById('toggle-social-linkedin')?.checked;
    const igOn = document.getElementById('toggle-social-instagram')?.checked;
    const anyOn = fbOn || liOn || igOn;
    const defaults = {
        title: "Suivez-nous",
        fb: "https://facebook.com/",
        li: "https://linkedin.com/",
        ig: "https://instagram.com/"
    };
    let isValid = true;
    if (!anyOn) {
        isValid = true;
    } else {
        if (!s.title || s.title.trim() === "" || s.title === defaults.title) {
            isValid = false;
        }
        if (fbOn && (!s.facebook || s.facebook.trim() === "" || s.facebook === defaults.fb || s.facebook === "https://")) {
            isValid = false;
        }
        if (liOn && (!s.linkedin || s.linkedin.trim() === "" || s.linkedin === defaults.li || s.linkedin === "https://")) {
            isValid = false;
        }
        if (igOn && (!s.instagram || s.instagram.trim() === "" || s.instagram === defaults.ig || s.instagram === "https://")) {
            isValid = false;
        }
    }
    checkSectionValidity('section-social', isValid);
}
// --- METADATA ---
function checkMetaValidity() {
    const m = localConfig.meta || {};
    const btn = document.querySelector('#section-seo .btn-save-step');
    if (!btn) return;
    if (localConfig.steps && localConfig.steps['section-seo'] === true) return;
    const defaultTitle = "Vitrine pop - Votre Nom";
    const defaultDesc = "La meta description (160 caractères max)";
    let isValid = true;
    if (!m.title || m.title.trim() === "" || m.title === defaultTitle) {
        isValid = false;
    }
    if (!m.description || m.description.trim() === "" || m.description.includes(defaultDesc)) {
        isValid = false;
    }
    checkSectionValidity('section-seo', isValid);
}
// --- LEGAL ---
function checkLegalValidity() {
    const l = localConfig.legal || {};
    const btn = document.querySelector('#section-legale .btn-save-step');
    if (!btn) return;
    const isValid =
        l.firstName && l.firstName.trim().length > 1 &&
        l.lastName && l.lastName.trim().length > 1 &&
        l.legalName && l.legalName.trim().length > 1 &&
        l.address && l.address.trim().length > 5 &&
        l.id1 && l.id1.trim().length > 3 &&
        l.contactValue && l.contactValue.trim().length > 5;
    if (isValid && (!localConfig.steps || localConfig.steps['section-legale'] !== true)) {
        if (!localConfig.steps) localConfig.steps = {};
        localConfig.steps['section-legale'] = true;

        btn.classList.add('btn-validated-status');
        btn.innerText = "✓ Validé";
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        sync(); 
    } else {
        checkSectionValidity('section-legale', isValid);
    }
}
// --- CHECK LINKEDIN KIT VALIDITY ---
function checkLinkedinValidity() {
    const li = localConfig.linkedinKit || {};
    const btn = document.querySelector('#section-linkedin-kit .btn-save-step'); 
    if (!btn) return;
    const defaults = {
        bannerTitle: "Explique quelle est ton offre unique et le bénéfice pour tes futurs clients",
        vignette1Title: "Echangeons sur votre projet",
        vignette1Cta: "Sélectionner",
        vignette2Title: "Découvrir mon univers",
        vignette2Cta: "Sélectionner"
    };
    let isValid = true;
    if (!li.bannerTitle || li.bannerTitle.trim() === "" || li.bannerTitle === defaults.bannerTitle) {
        isValid = false;
    }
    if (!li.figures || li.figures.length < 3 || !li.figures.every(f => f.label && f.label.trim() !== "")) {
        isValid = false;
    }    
    if (!li.vignette1Title || li.vignette1Title.trim() === "" || li.vignette1Title === defaults.vignette1Title) {
        isValid = false;
    }
    if (!li.vignette1Cta || li.vignette1Cta.trim() === "" || li.vignette1Cta === defaults.vignette1Cta) {
        isValid = false;
    }
    if (!li.vignette2Title || li.vignette2Title.trim() === "" || li.vignette2Title === defaults.vignette2Title) {
        isValid = false;
    }
    if (!li.vignette2Cta || li.vignette2Cta.trim() === "" || li.vignette2Cta === defaults.vignette2Cta) {
        isValid = false;
    }
    if (isValid && (!localConfig.steps || localConfig.steps['section-linkedin-kit'] !== true)) {
        if (!localConfig.steps) localConfig.steps = {};
        localConfig.steps['section-linkedin-kit'] = true;
        sync(); 
    } else {
        checkSectionValidity('section-linkedin-kit', isValid);
    }
}
function checkGlobalValidation() {
    const mode = localConfig.selectedMode;
    const finalSection = document.getElementById('section-finale');
    const finalBtn = document.getElementById('final-cta-button');
    const finalText = document.getElementById('final-cta-text');
    const finalTitle = document.getElementById('final-title');
    const finalDesc = document.getElementById('final-desc');
    let requiredSections = ['section-vitrine', 'section-model', 'section-couleurs', 'section-identite']; // Le "Core"
    if (mode === 'web') {
        requiredSections = requiredSections.concat([
            'section-accueil', 'section-services', 'section-avis', 'section-gallery', 
            'section-about', 'section-practical', 'section-faq', 'section-contact', 
            'section-social', 'section-seo', 'section-legale'
        ]);
        finalText.innerText = "Mettre ma vitrine en ligne";
    } else if (mode === 'linkedin') {
        requiredSections.push('section-linkedin-kit');
        finalText.innerText = "Télécharger mon kit LinkedIn";
    } else if (mode === 'full') {
        requiredSections = requiredSections.concat([
            'section-accueil', 'section-services', 'section-avis', 'section-gallery', 
            'section-about', 'section-practical', 'section-faq', 'section-contact', 
            'section-social', 'section-seo', 'section-legale', 'section-linkedin-kit'
        ]);
        finalText.innerText = "Lancer ma présence en ligne";
    }
    const allValid = requiredSections.every(id => localConfig.steps && localConfig.steps[id] === true);
    if (allValid) {
        finalSection.classList.remove('opacity-50', 'pointer-events-none', 'border-slate-200');
        finalSection.classList.add('border-violet-400', 'shadow-2xl', 'shadow-violet-100');
        
        finalBtn.classList.remove('grayscale', 'cursor-not-allowed');
        finalBtn.classList.add('hover:scale-[1.02]');
        
        finalTitle.innerText = "Tout est prêt !";
        finalTitle.classList.replace('text-slate-400', 'text-slate-800');
        finalDesc.innerText = "Vérifie une dernière fois ta vitrine, puis valide ci-dessous pour la rendre visible à tous.";
        finalDesc.classList.replace('text-slate-400', 'text-slate-500');
    } else {
        finalSection.classList.add('opacity-50', 'pointer-events-none');
        finalBtn.classList.add('grayscale', 'cursor-not-allowed');
        finalTitle.innerText = "Configuration incomplète";
    }
}


// --- LOGIQUE DEDIEE A L'ASSISTANCE IA ---
const PROMPTS = {
    hero: `Tu es un expert en copywriting web orienté conversion et clarté.
        Tu écris pour un site vitrine professionnel simple, crédible et efficace.
        CONTEXTE DU SITE
        - Domaine d’activité : [ex : coach sportif, artisan couvreur, thérapeute, consultant, etc.]
        - Cible principale : [ex : particuliers, TPE, indépendants, entreprises locales…]
        - Offres principales : [liste courte de ce que je propose]
        - Bénéfices clients clés : [ex : gain de temps, tranquillité d’esprit, plus de clients, résultats concrets…]
        - Action attendue sur le site : contacter / prendre rendez-vous
        - Ton souhaité : clair, humain, professionnel, sans jargon marketing
        OBJECTIF
        Générer le contenu de la section HERO d’un site vitrine optimisé pour inciter à la prise de contact.
        À PRODUIRE :
        1️⃣ Un titre H1
        - Court (1 phrase max)
        - Orienté bénéfice client
        - Clair en moins de 5 secondes
        - Doit expliquer la valeur apportée, pas juste le métier
        2️⃣ Un paragraphe d’accroche (2–3 lignes max)
        - Complète le H1 sans le répéter
        - Précise pour qui c’est, le problème résolu et le résultat attendu
        - Ton rassurant et concret
        3️⃣ Des suggestions de chiffres clés pertinents à afficher
        - Proposer 3 à 5 types de chiffres adaptés à mon activité
        - Exemples possibles : années d’expérience, projets réalisés, clients accompagnés, délais moyens, taux de satisfaction, zone géographique couverte, spécialisation, etc.
        - Ne pas inventer de chiffres, seulement indiquer les types à afficher
        4️⃣ L’intitulé du CTA principal pour passer à la section suivante (bénéfices / services)
        - Choisir le plus pertinent parmi cette liste :
        - "Voir nos services"
        - "Découvrir l’offre"
        - "Voir les bénéfices"
        - "Découvrir notre solution"
        - OU proposer un meilleur intitulé si aucun n’est optimal
        - Le CTA doit inciter à continuer la lecture, pas vendre directement
        5️⃣ Une **recommandation de type d’image pour la hero**
        - Indiquer le type d’image le plus crédible pour mon activité :
        - photo de réalisations / chantiers
        - ambiance de travail
        - photo d’équipe ou du professionnel
        - illustration sobre
        - Expliquer brièvement pourquoi ce choix inspire confiance
        CONTRAINTES
        - Texte orienté bénéfices clients et confiance
        - Pas de promesses exagérées
        - Pas de jargon marketing
        - Clarté > créativité
        - Le site doit donner envie de contacter ou prendre rendez-vous
        Réponds de façon structurée et directement exploitable pour un site web.
        `,

    services: `Tu es un expert en rédaction web orientée conversion et clarté.
        Objectif :
        M’aider à remplir la section “Services / Bénéfices” de mon site vitrine.
        Cette section contient 3 cartes visibles en un coup d’œil.
        Le but est que mes visiteurs comprennent immédiatement :
        - ce que je propose
        - en quoi ça les aide concrètement
        - pourquoi me choisir moi
        et qu’ils aient envie de cliquer sur “Contacter” ou “Prendre rendez-vous”.
        Contexte :
        Mon site est simple, rapide et orienté prise de contact.
        Les textes doivent être :
        - clairs
        - concrets
        - orientés bénéfices clients
        - rassurants (confiance, expertise)
        - sans jargon inutile
        Tu peux choisir la structure la plus pertinente selon mon activité :
        - soit 3 services distincts
        - soit 1 service décliné en 3 bénéfices forts
        - soit un mix logique (service + bénéfice)
        L’important : 3 cartes impactantes et cohérentes.
        Pour chaque carte, fournis :
        1. Un titre court et explicite (max 5–7 mots)
        2. Un paragraphe de 2–3 phrases qui parle du problème du client, du bénéfice obtenu et de ce qui me différencie
        3. (Optionnel) Une suggestion de tarif à afficher ou une recommandation de ne pas afficher de prix si ce n’est pas pertinent
        Voici les informations à prendre en compte :
        - Mon activité / métier : [décris ton activité en une phrase simple]
        - Mes offres ou prestations principales : [liste ou description courte]
        - Les problèmes ou frustrations de mes clients idéaux : [ce qu’ils veulent éviter]
        - Les résultats ou bénéfices qu’ils recherchent : [ce qu’ils veulent obtenir]
        - Ce qui me différencie des autres : [approche, méthode, expérience, valeurs]
        - Type de client idéal : [freelance, particulier, TPE, PME, etc.]
        - Souhait d’afficher des tarifs : [oui / non / à recommander]
        Contraintes importantes :
        - Le visiteur doit se reconnaître en moins de 5 secondes
        - Chaque carte doit donner envie d’aller plus loin
        - Les textes doivent naturellement mener à une prise de contact ou un rendez-vous
        - Ton style doit être simple, humain et orienté action
        À la fin, indique :
        - si la structure choisie est “3 services”, “3 bénéfices” ou “mix”
        - pourquoi cette structure est la plus pertinente pour mon activité
        `
};
function openIAModal(type = 'hero') {
    const modal = document.getElementById('modal-ia');
    const content = document.getElementById('prompt-content');
    
    if (modal && content && PROMPTS[type]) {
        modal.classList.remove('hidden');
        content.innerText = PROMPTS[type];
    }
}
function closeIAModal() {
    const modal = document.getElementById('modal-ia');
    if (modal) {
        modal.classList.add('hidden');
    }
}
function copyAIPrompt() {
    const content = document.getElementById('prompt-content');
    if (content) {
        const text = content.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Prompt copié !");
            closeIAModal();
        }).catch(err => {
            console.error('Erreur lors de la copie : ', err);
        });
    }
}
// --- GESTION PREVIEW (DESKTOP & MOBILE FULLSCREEN) ---
let isMobileView = false;
function toggleMobile() {
    const wrapper = document.getElementById('preview-wrapper');
    const toggleText = document.getElementById('toggle-text');
    const webFrame = document.getElementById('preview-frame');
    const liFrame = document.getElementById('linkedin-frame');
    isMobileView = !isMobileView;
    if (isMobileView) {
        wrapper.style.setProperty('width', '375px', 'important');
        wrapper.style.setProperty('height', '700px', 'important');
        wrapper.style.setProperty('padding-top', '0', 'important'); 
        wrapper.classList.add('shadow-2xl', 'border-[12px]', 'border-slate-800', 'rounded-[3rem]', 'my-auto', 'overflow-hidden');
        [webFrame, liFrame].forEach(f => {
            if(f) f.classList.add('rounded-[2rem]'); 
        });
        toggleText.textContent = "Vue Desktop";
    } else {
        wrapper.style.width = "100%";
        wrapper.style.height = "100%";
        wrapper.style.setProperty('padding-top', '3.5rem', 'important'); 
        wrapper.classList.remove('border-[12px]', 'border-slate-800', 'rounded-[3rem]', 'h-[700px]', 'my-auto', 'overflow-hidden');
        [webFrame, liFrame].forEach(f => {
            if(f) f.classList.remove('rounded-[2rem]');
        });
        toggleText.textContent = "Vue Mobile";
    }
}
let isFullPreviewOpen = false;
function handleMobilePreview() {
    const previewMain = document.querySelector('main');
    const previewWrapper = document.getElementById('preview-wrapper');
    const iconContainer = document.getElementById('mobile-toggle-icon');

    isFullPreviewOpen = !isFullPreviewOpen;

    if (isFullPreviewOpen) {
        previewMain.style.setProperty('display', 'flex', 'important');
        previewMain.className = "fixed inset-0 z-[9999] bg-white flex flex-col";
        previewWrapper.className = "relative w-full h-full pt-20 transition-all";
        previewWrapper.style.width = "100vw";
        previewWrapper.style.height = "100vh";

        iconContainer.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        if (currentActiveSectionId && frame && frame.contentWindow) {
            const target = scrollMapping[currentActiveSectionId];
            frame.contentWindow.postMessage({
                type: 'SCROLL_TO',
                section: target
            }, '*');
        }
    } else {
        previewMain.style.display = "";
        previewMain.className = "hidden lg:flex flex-1 bg-slate-100 items-center justify-center relative overflow-hidden";
        previewWrapper.className = "w-full h-full flex items-center justify-center pt-14 transition-all duration-500";
        previewWrapper.style.width = "";
        previewWrapper.style.height = "";

        iconContainer.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    setTimeout(initScrollObserver, 300);
}
// --- SCROLL SYNCHRONE ---
const scrollContainer = document.querySelector('aside');
const scrollMapping = { 
    'section-accueil': 'hero', 
    'section-services': 'services', 
    'section-avis': 'testimonials', 
    'section-gallery': 'social-proof',  
    'section-about': 'about', 
    'section-practical': 'practical', 
    'section-faq': 'faq', 
    'section-contact': 'contact',
    'section-social': 'social-links', 
    'section-legale': 'footer-credit' 
};
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cleanId = entry.target.id;
            const targetSection = scrollMapping[cleanId];
            
            if (targetSection && currentActiveSectionId !== cleanId) {
                currentActiveSectionId = cleanId;
                
                if (frame && frame.contentWindow) { 
                    frame.contentWindow.postMessage({ 
                        type: 'SCROLL_TO', 
                        section: targetSection 
                    }, '*'); 
                }
            }
        }
    });
}, { 
    root: scrollContainer,
    threshold: 0, 
    rootMargin: "-20% 0px -60% 0px" 
});
function initScrollObserver() {
    document.querySelectorAll('[id^="section-"]').forEach(section => {
        scrollObserver.unobserve(section); 
        scrollObserver.observe(section);
    });
}
initScrollObserver();


function generateExport() {
    localStorage.setItem('vitrine_express_progression', JSON.stringify(localConfig));
    alert("Progrès sauvegardés !");
}