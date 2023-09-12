import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/crimson-text/400.css"
import "@fontsource/crimson-text/600.css"
import "@fontsource/crimson-text/700.css"
import {Button} from './buttons'

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
    },
  },
  fonts: {
    body: "open Sans, sans-serif",
    heading: "Crimson Text, serif",
  },
  // styles: {
  //   global: () => ({
  //     body: {
  //       bg: "gray.200",
  //     },
  //   }),
  // },
  components: {
    Button,
  },
});
