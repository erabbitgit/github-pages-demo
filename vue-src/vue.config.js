const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: path.resolve(__dirname, '../docs/vue-project'), // 編譯結果放到 /docs/vue-project
  configureWebpack: {
    resolve: {
      alias: {
        '@production': path.resolve(__dirname, '../docs/vue-project')
      }
    }
  }
})
