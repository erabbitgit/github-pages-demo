const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "docs/vue-project", // 編譯結果放到 /docs/vue-project
})
