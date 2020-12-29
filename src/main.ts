import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import app from '@/utils/ant-design.ts' // 这里导出的app集成了createApp(App)
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Bus from '@/utils/eventBus'

const app = createApp(App)

/* 注册全局变量 */
app.provide('$bus', new Bus())

// createApp(App)
app
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app')
