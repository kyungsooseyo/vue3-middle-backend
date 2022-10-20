// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
console.log(process.env.VUE_APP_BASE_API)
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/icons')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
  },
  devServer: {
    proxy: {
      // ~ 当地址中包含/api时，将请求转发到target
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}
