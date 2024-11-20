const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 依環境設置，指定生產環境的靜態文件的公共路徑
  outputDir: path.resolve(__dirname, '../docs/vue-project'), // 編譯結果放到 /docs/vue-project
  configureWebpack: {
    resolve: {
      alias: {
        '@production': path.resolve(__dirname, '../docs/vue-project')
      }
    }
  }
})
