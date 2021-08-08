require("dotenv").config({
  path: "./config/config.env"
});

export default {
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000
  },

  head: {
    title: "marriage-registry",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [{ src: "~/assets/sass/main.sass" }],

  plugins: [],

  buildModules: [
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        suffix: true,
        icons: {
          solid: ["faSearch", "faHeart", "faAngleDown"]
        }
      }
    ]
  ],

  modules: [
    "@nuxtjs/toast",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/pwa",
    [
      "@nuxtjs/i18n",
      {
        strategy: "no_prefix",
        locales: [
          {
            code: "en",
            file: "en-US.js"
          },
          {
            code: "tm",
            file: "tm-TM.js"
          },
          {
            code: "ru",
            file: "ru-RU.js"
          }
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "en"
      }
    ]
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/admin/login", method: "post" },
          user: false,
          logout: false
        }
      }
    },
    redirect: {
      login: "/admin/login",
      logout: "/",
      callback: "/admin/login",
      home: "/admin-dashboard"
    }
  },

  toast: {
    position: "bottom-right",
    duration: 5000
  },

  axios: {
    baseURL: process.env.SERVER_URL || "http://localhost:3000"
  },

  pwa: {
    manifest: {
      lang: "en"
    }
  },

  build: {}
};
