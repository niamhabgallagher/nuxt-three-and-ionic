// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/_colors.scss" as *;'
  //       }
  //     }
  //   }
  // },
  // modules: [
  //   // https://ionic.nuxtjs.org/
  //   '@nuxtjs/ionic'
  // ],
  css: [
    '~/assets/css/ionic.css',
    '@ionic/core/css/core.css',
    '@ionic/core/css/normalize.css',
    '@ionic/core/css/structure.css',
    '@ionic/core/css/typography.css',
    '@ionic/core/css/ionic.bundle.css',
  ],
  ssr: false
});
