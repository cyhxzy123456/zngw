module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '股票配资系统_配资软件开发【紫牛软件】互联网股票分仓软件开发公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '成都紫牛软件致力于为证券金融平台提供互联网解决方案，主要提供股票配资系统、股票分仓软件开发、股票资管软件、50ETF资管软件等，为金融企业发展赋能。' },
      { hid: 'keyWords',name:'keyWords', content:'配资系统,配资软件,股票配资系统,股票配资软件,股票配资软件开发,股票配资系统开发'},
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
    {src:'~/plugins/axios.js'},

  ],
  css: [
    'assets/main.css',
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

