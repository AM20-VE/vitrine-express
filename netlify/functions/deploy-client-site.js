const axios = require('axios');
const AdmZip = require('adm-zip');

const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') 
    .replace(/[^a-z0-9 -]/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-');
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { html, config } = JSON.parse(event.body);
    const token = process.env.NETLIFY_AUTH_TOKEN;
    const accountId = process.env.NETLIFY_ACCOUNT_ID;

    // --- LOGIQUE DE RÉCUPÉRATION DE L'ID ---
    // On regarde si on a déjà un ID de site Netlify stocké dans la config
    let siteId = config.meta?.netlifySiteId; 
    let deployUrl;

    if (!siteId) {
      console.log("Mode : CRÉATION de site");
      
      // 1. Préparation du nom de domaine (Uniquement pour la création)
      const companyName = config.header?.companyName || "Ma Vitrine";
      let siteSlug = slugify(companyName);
      let finalDomain = `${siteSlug}.vitrine-express.net`;
      const shortId = Math.random().toString(36).substring(2, 6);

      // 2. TENTATIVE DE CRÉATION DU SITE
      try {
        const createSiteResponse = await axios.post(
          `https://api.netlify.com/api/v1/${accountId}/sites`,
          {
            name: `ve-${siteSlug}-${shortId}`, 
            custom_domain: finalDomain
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        siteId = createSiteResponse.data.id;
        deployUrl = `https://${finalDomain}`;
      } catch (err) {
        // SI ERREUR (ex: domaine déjà pris)
        if (err.response && (err.response.status === 422 || err.response.status === 409)) {
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
          throw err; 
        }
      }
    } else {
      console.log("Mode : MISE À JOUR du site ID", siteId);
      // Pour une mise à jour, on récupère l'URL existante (ou on la reconstruit)
      // Netlify API renverra l'URL finale après le déploiement
    }

    // 3. PRÉPARATION DU ZIP (Identique pour Création ou Update)
    const zip = new AdmZip();
    zip.addFile("index.html", Buffer.from(html, "utf8"));

    const headersContent = `/*
  Content-Type: text/html; charset=utf-8
  X-Content-Type-Options: nosniff
`;
    zip.addFile("_headers", Buffer.from(headersContent, "utf8"));
    const zipBuffer = zip.toBuffer();

    // 4. DÉPLOIEMENT DES FICHIERS (On "pousse" sur le siteId)
    const deployResponse = await axios.post(
      `https://api.netlify.com/api/v1/sites/${siteId}/deploys`,
      zipBuffer,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/zip"
        }
      }
    );

    // Si c'était une mise à jour, on récupère l'URL officielle du déploiement
    if (!deployUrl) {
        deployUrl = deployResponse.data.ssl_url || deployResponse.data.url;
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        success: true, 
        deployUrl: deployUrl,
        siteId: siteId // On renvoie l'ID pour que le client le garde précieusement
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