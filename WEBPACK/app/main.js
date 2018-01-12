import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入element-ui组件,以下是完整引入
// import ElementUI from 'element-ui'     
import 'element-ui/lib/theme-chalk/index.css'   //样式文件需要单独引入
// Vue.use(ElementUI)

import { Button,Row,Col } from 'element-ui'
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)


new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: { App }
})