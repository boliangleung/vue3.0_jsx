const CreateWebpWebpackPlugin = require('create-webp-webpack-plugin')
const path = require('path')
const px2rem = require('postcss-px2rem-exclude')
const autoprefixer = require('autoprefixer')

const postcss = px2rem({
  exclude: /node_modules/i,
  remUnit: 100 // 基准大小 baseSize，需要和 ./src/js/lib/flexible.js 中相同
})

const publicPath = './'

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath,
  outputDir: 'output',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    host: 'local-test.yy.com',
    port: 8080,
    https: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss, autoprefixer]
      },
      sass: {
        prependData: "@import '~@/css/utils.scss';"
      }
    }
  },
  configureWebpack: {
    // externals: {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex',
    //   axios: 'axios'
    // },
    plugins: [isProduction && new CreateWebpWebpackPlugin()].filter(Boolean)
  },
  chainWebpack: config => {
    if (isProduction) {
      // 压缩图片
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          bypassOnDebug: true,
          mozjpeg: {
            progressive: true,
            quality: 80
          }
        })
        .end()
    }
  },
  transpileDependencies: [/@yy/]
}
