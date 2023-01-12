import head from "./configDir/appConfig/head";
import socialLinks from "./configDir/themeConfig/socialLinks";
import editLink from "./configDir/themeConfig/editLink";
import license from "./configDir/themeConfig/license";
import copyright from "./configDir/themeConfig/copyright";
import nav from "./configDir/themeConfig/nav";
import sidebar from "./configDir/themeConfig/sidebar";

export default {
  lang: 'zh-CN',
  title: 'Mc-Doc',
  description: '一个 PHP 微信开发 SDK',
  srcDir: 'src',
  srcExclude: [],
  scrollOffset: 'header',
  head,
  themeConfig: {
    logo: '/logo.png',
    nav,
    sidebar,
    socialLinks,
    editLink,
    license,
    copyright
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: []
    },
    // @ts-ignore
    ssr: {
      external: []
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
}
