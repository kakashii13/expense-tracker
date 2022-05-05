import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
});
