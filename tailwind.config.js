module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        white_A700_7f: "#ffffff7f",
        white_A700_b2: "#fbfcffb2",
        bluegray_100_3f: "#d9d9d93f",
        light_green_A700: "#6dea41",
        blue_A200: "#497bfb",
        gray_50: "#f8fbff",
        gray_200_3f: "#e7e7e73f",
        white_A700_99: "#ffffff99",
        gray_400_3f2: "#b6b6b63f",
        black_900_66: "#0e0e0e66",
        black_900: "#000000",
        blue_A200_66: "#497bfb66",
        gray_400_3f1: "#c2c2c23f",
        gray_600: "#7f7f7f",
        gray_700: "#5f5f5f",
        gray_500: "#909090",
        bluegray_100_3f1: "#d1d1d13f",
        gray_901: "#161616",
        gray_902: "#272727",
        gray_400_3f: "#c3c3c33f",
        gray_800: "#393939",
        gray_900: "#202020",
        gray_801: "#444444",
        gray_200: "#eaeaea",
        gray_700_3f: "#6868683f",
        gray_100: "#f5f5f5",
        white_A700_82: "#ffffff82",
        bluegray_900: "#333333",
        bluegray_700: "#525252",
        gray_300_3f: "#dbdbdb3f",
        white_A700: "#ffffff",
        gray_600_3f: "#8585853f",
        bluegray_901: "#373737",
      },
      borderRadius: {
        radius4: "4px",
        radius5: "5px",
        radius10: "10px",
        radius20: "20px",
        radius30: "30px",
        radius50: "50%",
        radius175: "17.5px",
      },
      boxShadow: {
        bs3: "0px 10px  20px 0px #dbdbdb3f",
        bs8: "0px 10px  20px 0px #d1d1d13f",
        bs5: "0px 10px  30px 0px #d9d9d93f",
        bs2: "0px 15px  30px 0px #c2c2c23f",
        bs1: "0px 20px  30px 0px #c3c3c33f",
        bs6: "0px 20px  40px 0px #e7e7e73f",
        bs7: "0px 30px  70px 0px #b6b6b63f",
        bs: "0px 10px  30px 0px #6868683f",
        bs4: "0px 10px  30px 0px #8585853f",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
