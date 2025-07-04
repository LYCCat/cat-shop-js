import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import { getTest } from './api/testApi'
// getTest().then(res=>{
//     console.log("begin")
//     console.log(res)
// }
// )
//引入初始化的样式文件
import '@/styles/common.scss'
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
