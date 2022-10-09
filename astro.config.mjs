import { defineConfig } from "astro/config";
import unocss from "unocss/vite";
import { presetUno, transformerDirectives } from "unocss";
import presetDaisy from "unocss-preset-daisy";

export default defineConfig({
  vite: {
    plugins: [
      unocss({
        transformers: [transformerDirectives()],
        presets: [presetUno(), presetDaisy({})],
        rules: [["list-dash", { "list-style-type": "'-' " }]],
        theme: {
          colors: {
            cc: {
              base: {
                100: "#D2DAD6",
                200: "#A6B4B0",
                300: "#7A8F8E",
                400: "#4E6168",
                500: "#233142",
                600: "#1E253A",
                700: "#191A32",
                800: "#19152A",
                900: "#181022",
              },
            },
          },
        },
      }),
    ],
  },
});
