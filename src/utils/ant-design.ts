import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css'
import App from '../App.vue'

import {
  Button,
  Form,
  Input,
  Select,
  Row,
  Col
} from 'ant-design-vue'

const app = createApp(App)
app.use(Button)
app.use(Row)
app.use(Col)
app.use(Form)
app.use(Input)
app.use(Select)

export default app
