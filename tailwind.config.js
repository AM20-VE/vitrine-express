/** @type {import('tailwindcss').Config} */
module.exports = {
  // TRÈS IMPORTANT : On dit à Tailwind de regarder tous tes fichiers HTML et JS
  content: [
    "./index.html",
    "./config.html",
    "./success-ve-complet.html",
    "./success-ve-linkedin.html",
    "./success-ve-web.html",
    "./script.js",
    "./config.js"
  ],
  theme: {
    extend: {
      // Tu pourras ajouter tes couleurs personnalisées ici plus tard
    },
  },
  plugins: [],
}