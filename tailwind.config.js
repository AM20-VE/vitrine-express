/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./*.html",        
  "./*.js",          
  "./config/*.js",   
  "./pages/**/*.html" 
],
 safelist: [
  "scale-95",
  "scale-[1.02]",
  "active:scale-[0.98]",
  "blur-[80px]",
  "blur-[120px]",
  "z-[100]",
  "bg-indigo-200/30",
  "max-w-lg",
  "items-center",
  "justify-center",
  "-right-2",
  "-bottom-6"
],
  theme: {
    extend: {
    },
  },
  plugins: [],
}