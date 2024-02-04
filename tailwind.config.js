/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1' : '40px',
        'h2' : '32px',
        'h3' : '28px',
        'h4' : '24px',
        'h5' : '20px',
        'h6' : '16px',
        'button': '16px',
        'normal': '16px',
        'small': '13px'
      },
      textColor:{
        'lightBlue' : "#016A70"
      },
      backgroundColor:{
        'lightBlue': '#016A70'
      },
      backgroundImage: {
        
        'footer': "url('/public/Images/footer.png')",
      }
    },
  },
  plugins: [],
}