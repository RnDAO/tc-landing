import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | TOGHETHERCREW',
      title: 'TOGHETHERCREW',
      htmlAttrs: {
          lang: 'en',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/tailwindcss.css",
    "~/assets/css/global.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: [
    "~/plugins/font-awsome.js",
    { src: "@/plugins/aos", ssr: false, mode: "client" },
  ],
});
