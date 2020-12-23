// import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import app from '@/utils/ant-design.ts' // 这里导出的app集成了createApp(App)

app
  .use(store)
  .use(router)
  .mount('#app')
