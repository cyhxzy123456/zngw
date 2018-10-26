module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'study2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress bar color
   */

  loading: { color: '#3B8070' },
  /*  配置css文件*/
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  },
    {src:'~/plugins/axios.js'}
  ],
  css: [
    '~assets/main.css',
    'element-ui/lib/theme-chalk/index.css',
    /*配置scss*/
    /*{
     src: '*.scss',
     lang: 'scss'
     }*/
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor:['element-ui','axios']   //防止element-ui被打包多次
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    prefix: '/api/',
    proxy: true
  },
  proxy: {
    '/api/': {target: 'http://apiweb.ziniusoft.com',pathRewrite: {'^/api/': ''}}
  }

}

