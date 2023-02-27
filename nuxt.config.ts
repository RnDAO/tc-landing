import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare_pages",
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
  runtimeConfig: {
    public: {
      baseUrl:process.env.NUXT_PUBLIC_BASE_URL,
      dashboardUrl: process.env.NUXT_PUBLIC_DASHBOARD_REDIRECT_LINK,
      calendarUrl: process.env.NUXT_PUBLIC_CALENDAR,
      discord: process.env.NUXT_PUBLIC_DISCORD,
      mirror: process.env.NUXT_PUBLIC_MIRROR,
      telegram: process.env.NUXT_PUBLIC_TELEGRAM,
      twitter: process.env.NUXT_PUBLIC_TWITTER,
      researchUrl: process.env.NUXT_PUBLIC_RNDAO_RESEARCH,
    },
  },
});
