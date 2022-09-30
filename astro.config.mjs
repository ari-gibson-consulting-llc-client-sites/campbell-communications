import { defineConfig } from "astro/config";
import unocss from "unocss/vite";
import { presetUno, transformerDirectives } from "unocss";
import presetDaisy from "unocss-preset-daisy";

export default defineConfig({
  vite: {
    plugins: [
      unocss({
        transformers: [transformerDirectives()],
        presets: [presetUno(), presetDaisy()],
      }),
    ],
  },
});
