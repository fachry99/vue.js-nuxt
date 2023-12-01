// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootdir>/assets",
  },
  css: ["~/assets/main.scss", "tailwindcss/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
});
