const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   proxy: 'http://192.168.82.215'    //这种只能配置一个代理
  // }

  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.82.215',
        pathRewrite: {
          "^/api": ""
        },
        ws: true,
        changeOrigin: true   //用于控制请求头中的host值
      }
    }

  }
})

