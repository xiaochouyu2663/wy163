import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
// import axios from 'axios'

//引入element-ui组件,以下是完整引入
import ElementUI from 'element-ui'     
//import 'element-ui/lib/theme-chalk/index.css'   //样式文件需要单独引入
import '../theme/index.css'      //自定义主题
Vue.use(ElementUI)


/**引入vue-cookie */
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);



/**引入状态管理 */
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({    //实例化store
    state:{
       
    },
    mutations:{
        
    }
})

/**引入axios 加入Vue原型 */
import axios from 'axios';
axios.defaults.baseURL='http://www.cc.com/api/account/';
Vue.prototype.$axios=axios


/**实例化Vue */
new Vue({
    el:'#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})


