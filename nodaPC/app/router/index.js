import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Layout from '../components/Layout'
import UserCenter from '../components/user/UserCenter'
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
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/usercenter',
            name:'usercenter',
            component:UserCenter
        },
        {
            path:'/layout',
            name:'layout',
            component:Layout
        }
    ]
 })