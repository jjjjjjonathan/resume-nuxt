// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: {
      theme: {
        screens: {
          letter: '1367px',
          medium: '1024px',
          small: '600px',
          xs: '460px',
        },
      },
    },
  },
  app: {
    head: {
      title: 'Resume | Jonathan Cheng',
    },
  },
});
