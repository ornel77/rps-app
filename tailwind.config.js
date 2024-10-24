/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        scissors:"#eb9f0e",
        paper: "#4865f4",
        rock:"#dc2e4e",
      },
      boxShadow: {
        icon: '0px 0px 0px 25px rgba(255, 255, 255, 0.05)',
        "iconContainer-sd": 'inset 0px 6px 0px 0px #babfd4',
        "scissors-sd": "rgb(199, 108, 27) 0px 6px 0px 0px, rgba(0, 0, 0, 0.196) 0px 3px 3px",
        "rock-sd": "rgb(157, 22, 52) 0px 6px 0px 0px, rgba(0, 0, 0, 0.196) 0px 3px 3px",
        "paper-sd": "rgb(42, 69, 194) 0px 6px 0px 0px, rgba(0, 0, 0, 0.196) 0px 3px 3px",
      },
      backgroundImage: {
        iconContainer:"linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%)",
      }
    },
  },
  plugins: [],
};
