import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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
  },
});
