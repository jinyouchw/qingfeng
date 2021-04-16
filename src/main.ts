import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import { registerComp } from './components/registerComp'

import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import 'flex.css'
import i18n from './language/index'

const app =  createApp(App)

registerComp(app) //注册全局组件

app.use(store)
  .use(router)
  .use(Antd)
  .use(i18n)
  .mount("#app");