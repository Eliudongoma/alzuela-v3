import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

// Replace with your own color pallete
const theme = extendTheme({
  config,
  brand: {  
      50: "#EBF8FF",
      100: "#BEE3F8",
      200: "#90CDF4",
      300: "#63B3ED",
      400: "#4299E1",
      500: "#3182CE",
      600: "#2B6CB0",
      700: "#2C5282",
      800: "#2A4365",
      900: "#1A365D",  
  },  
});

export default theme;
