const { defineConfig } = require('@vue/cli-service')
console.log('>>>>:', process.env.NODE_ENV)
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   proxy: 'http://192.168.82.215'    //这种只能配置一个代理
  // }
  devServer: {
    // open: ['#/znz/sz/20220818/203'],
    open: ['#/dataV/sz/all/203'],
    host: 'localhost',

    // proxy: {
    //   '/api': {
    //     target: 'http://webnervedata.compass.cn',
    //     secure: false,
    //     pathRewrite: {
    //       "^/api": ""
    //     },
    //     ws: true,
    //     changeOrigin: true,   //用于控制请求头中的host值
    //     // headers: {
    //     //   Cookie: 'wnPersonId=2021639;wnSessionKey=ef1b824d8b3a372a32aa822a96ada877;PHPSESSID=n9vp4o9avg37717u1nbesquld3'
    //     // }
    //   }
    // }

  }
})

