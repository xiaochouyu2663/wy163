import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Layout from '../components/Layout'
import UserCenter from '../components/user/UserCenter'
import Message from '../components/user/Message'
import Safety from '../components/user/Safety'
import Address from '../components/user/Address'
import Updatepwd from '../components/user/Updatepwd'
import Shops from '../components/user/Shops'
import Personal from '../components/user/Personal'
import Partner from '../components/user/Partner'
import Share from '../components/user/Share'
import Comment from '../components/user/Comment'
import Integral from '../components/user/Integral'
import Returnmoney from '../components/user/Returnmoney'
import Returngoods from '../components/user/Returngoods'
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