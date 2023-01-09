// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '~/assets/css/tailwindcss.css',
        '~/assets/css/global.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    plugins:['~/plugins/font-awsome.js']
})
