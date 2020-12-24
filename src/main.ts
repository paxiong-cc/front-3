import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import app from '@/utils/ant-design.ts' // 这里导出的app集成了createApp(App)
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app')
