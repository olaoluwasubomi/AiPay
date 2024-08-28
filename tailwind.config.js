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
        'firstsec':"#fdf1ea",
        'secondsec':'#f7f4e7',
        'payment':'#EAF3FF',
        'paymentcolor':'#FFCE3C',
        'landingtextcolor':'#484747',
        'fontcolor':'#818080',
        'servicebg':"#0B4D9E",
        'servicetext':'#D8D1D1',
        'servicelibg':"#D2E3F9",
        'servicel2bg':"#FFCE3C",
        'getstartedbg':'#3B8AEB',
        'footerbg':'#F5F9FF'
      },
      inset: {
        '3/5':'95%',
      }
    },
  },
  plugins: [],
}