
export default defineNuxtConfig({
  css: ["/assets/main.css"],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-directus',
    // '@nuxt/postcss8', not currently supported in release candidate
  ],
  directus: {
    url: "https://swyi1ut9.directus.app/", // change
  },
  build: {
    transpile: ["@urql/vue"],
    postcss: {
      postcssOptions: {
        plugins: {
          // 'postcss-import': {},
          tailwindcss: { config: './tailwind.config.js' },
          autoprefixer: {},
        },
      },
    },
  },
  ssr: false,
  components: true,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
