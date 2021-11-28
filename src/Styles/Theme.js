import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    white: { 100: "#F2F2F2" },
    yellow: { 100: "#F2C94C" },
    pink: { 500: "#E2236F" },
    gray: { 100: "#888888" },
    dark: { 100: "#424242"}
  },
});
