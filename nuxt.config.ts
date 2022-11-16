// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: {
      theme: {
        screens: {
          letter: '817px',
          medium: '808px',
          small: '670px',
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
