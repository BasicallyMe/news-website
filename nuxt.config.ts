// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  app: {
    head: {
      title: "Zenith | News & More",
    },
  },
  runtimeConfig: {
    CURRENTS_API_KEY: "R0_FxAWTjFS99VceP15qjr2DVd5LjFTilkEw0Ua5UoFsttlq",
    NEWS_API_KEY: "852e06a3f7e44dc0888a485147d9f124",
  },
});
