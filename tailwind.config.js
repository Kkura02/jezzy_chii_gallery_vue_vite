/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kokoprimary: "#f6d4cb",
        kokosecondary: "#b7c1de",
        kokodimPurple: "#2e2e59",
        kokolightPurple: "#968dd8",
        kokoWhite: "#f8f7fd",
        kokoEyedimPurple: "#423b96",
        kokoEyelightPurple: "#7569b7",
        kokoEyePink: "#e3c5db",
        kokoEyeLiner: "#2e172b",
        kokoCoralPink: "#f08080"
      }
    },
  },
  plugins: [],
}

