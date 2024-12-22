// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
