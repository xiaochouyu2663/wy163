import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
Vue.use(Router)

export default new Router({
    // mode:'history',
    routes:[
        {
            path:'/',
            name:'main',
            component:Home
        },
        {
            path:'/home',
            name:'home',
            component:Home,
            redirect:'/'
        }
    ]
 })