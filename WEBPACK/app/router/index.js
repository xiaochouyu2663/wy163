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
            path:'/message',
            name:'message',
            component:Message
        },
        {
            path:'/safety',
            name:'safety',
            component:Safety
        },
        {
            path:'/address',
            name:'address',
            component:Address
        },
        {
            path:'/updatepwd',
            name:'updatepwd',
            component:Updatepwd
        },
        {
            path:'/shops',
            name:'shops',
            component:Shops
        },
        {
            path:'/personal',
            name:'personal',
            component:Personal
        },
        {
            path:'/partner',
            name:'partner',
            component:Partner
        },
        {
            path:'/share',
            name:'share',
            component:Share
        },
        {
            path:'/comment',
            name:'comment',
            component:Comment
        },
        {
            path:'/integral',
            name:'integral',
            component:Integral
        },
        {
            path:'/returngoods',
            name:'returngoods',
            component:Returngoods
        },
        {
            path:'/returnmoney',
            name:'returnmoney',
            component:Returnmoney
        }
    ]
 })