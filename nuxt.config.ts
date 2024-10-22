// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true } ,
  modules: ['@nuxtjs/tailwindcss'], 
  app: {
    head: {
      title: 'Nuxt Merch',
      meta: [
        { name : 'description', content: 'Everything about Nuxt 3'}
      ],
      link : [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  // Any keys added directly in this object will be exposed to server side routes
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
    //If you want to exposed variables to the front end. Used public instead
    // public: {

    // }
  }
})
