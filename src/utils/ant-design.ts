import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css'
import App from '@/App.vue'

import {
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  Menu,
} from 'ant-design-vue'

// icon
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   DesktopOutlined,
//   InboxOutlined,
//   MailOutlined,
//   PieChartOutlined,
//   AppstoreOutlined
// } from '@ant-design/icons-vue'

const app = createApp(App)
app.use(Button)
app.use(Row)
app.use(Col)
app.use(Form)
app.use(Input)
app.use(Select)
app.use(Menu)
// app.use(Icon)

export default app
