import { createApp } from 'vue'
import App from './App.vue'
{{console.log({
  'NODE_ENV': process.env.NODE_ENV,
  'VUE_APP_MODE': process.env.VUE_APP_MODE,
  'BASE_URL': process.env.BASE_URL
})}}
createApp(App).mount('#app')
