/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily :{
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        PoppinsMedium :["Poppins-Medium"],
        PoppinsBold :["Poppins-Bold"],
        PoppinsExtraBold :["Poppins-ExtraBold"],
        PoppinsSemiBold :["Poppins-SemiBold"],
        PoppinsBlack :["Poppins-Black"],
        PoppinsThin :["Poppins-Thin"],
        PoppinsLight :["Poppins-Light"],
        PoppinsRegular :["Poppins-Regular"],
        barlowtypodesbois :["barlow-typo-des-bois"],
        saiddier: ["saiddier","sans-serif"]

    },
    colors: {
      'blue-violet': '#8a2be2',
      'royal-blue': '#4169e1',
      'frosted-morning': '#e6e1d3',
      'dark-blue': '#00008b',
      'light-beige': '#F1F0EB',
      'light-blue': '#ADD8E6',
      'dark-blue-1': '#1e3a8a',
      'charcoal': '#333333',
      'lawngreen': '#7CFC00',

    },
    }
  },
  plugins: [],
};
