/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray':"#484747",
        'textcolor':"#1760BA",
        'classic':'#EAF3FF',
        'agree':'#726B6B',
        'firstsec':"#fcf0e8",
        'secondsec':'#dce1d9',
        'payment':'#EAF3FF',
        'paymentcolor':'#FFCE3C'
      }
    },
  },
  plugins: [],
}