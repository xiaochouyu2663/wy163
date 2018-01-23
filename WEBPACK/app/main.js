import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
//引入element-ui组件,以下是完整引入
import ElementUI from 'element-ui'     
//import 'element-ui/lib/theme-chalk/index.css'   //样式文件需要单独引入
import '../theme/index.css'      //自定义主题
// Vue.use(ElementUI)

import { Button,Row,Col,Container,Header,Footer,Aside ,Main,Input,Tag,
    Menu,Submenu,MenuItemGroup,MenuItem,Carousel,CarouselItem,Tabs,
    TabPane,Card,Checkbox } from 'element-ui'
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Input)
Vue.use(Tag)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Checkbox)
new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: { App }
})