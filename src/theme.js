import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        margin: "0 10px 0 0",
      },
    },
    Button: {
      baseStyle: {},
      variants: {},
    },
  },
});
