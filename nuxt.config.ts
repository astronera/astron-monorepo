
export default defineNuxtConfig({
  css: ["/assets/main.css"],
  build: {
    transpile: ["@urql/vue"],
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-import': {},
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
