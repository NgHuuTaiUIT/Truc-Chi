/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      primaryBg: '#384E4D',
      menuBg: '#D9D9D98C',
      menuHover:'#FFFFFF4D',
      secondaryBg: '#98575a',
      coverBg: '#000000B2',
      //text color
      textCl: '#fff',
      txt1: '#E3DCD2',
      txt2: '#BC9F85',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "serif"]
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        fadeIn: "fadeIn 1s "
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
