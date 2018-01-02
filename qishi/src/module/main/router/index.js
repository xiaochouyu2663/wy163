import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login'
import Home from 'components/Home'
import Shopcar from 'components/Shopcar'
import Person from 'components/Person'
import Detail from 'components/Detail'
import Settlement from 'components/Settlement'
import Pay from 'components/Pay'
import Myshop from 'components/Myshop'
import Order from 'components/Order'
import Game from 'components/Game'
import Integral from 'components/Integral'
import Address from 'components/Address'
import News from 'components/News'
import Share from 'components/Share'
import PersonalInfo from 'components/PersonalInfo'
import AddAddress from 'components/AddAddress'
import UpdateInfo from 'components/UpdateInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name: 'Login',
      component: Login,

    },
    {
      path:'/:userId',
      name: 'Main',
      component: Home,
      meta:{requiresAuth:true}
    },
    {
      path: '/home/:userId',
      redirect:'/:userId',
      name: 'Home',
      component: Home,
      meta:{requiresAuth:true}
    },
    {
      path: '/shopcar/:userId',
      name: 'Shopcar',
      component: Shopcar,
      meta:{requiresAuth:true}
    },
    {
      path: '/person/:userId',
      name: 'Person',
      component: Person,
      meta:{requiresAuth:true}
    },
    {
      path: '/detail/:proid',
      name: 'Detail',
      component: Detail,
      meta:{requiresAuth:true}
    },
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement,
      meta:{requiresAuth:true}
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay,
      meta:{requiresAuth:true}
    },
    {
      path: '/myshop',
      name: 'Myshop',
      component: Myshop,
      meta:{requiresAuth:true}
    },
    {
      path:'/order',
      name:'Order',
      component:Order,
      meta:{requiresAuth:true}
    },
    {
      path:'/game',
      name:'Game',
      component:Game,
      meta:{requiresAuth:true}
    },
    {
      path:'/integral',
      name:'Integral',
      component:Integral,
      meta:{requiresAuth:true}
    },
    {
      path:'/address/:userId',
      name:'Address',
      component:Address,
      meta:{requiresAuth:true}
    },
    {
      path:'/news',
      name:'News',
      component:News,
      meta:{requiresAuth:true}
    },
    {
      path:'/share',
      name:'Share',
      component:Share,
      meta:{requiresAuth:true}
    },
    {
      path:'/personalInfo',
      name:'PersonalInfo',
      component:PersonalInfo,
      meta:{requiresAuth:true}
    },
    {
      path:'/addAddress',
      name:'AddAddress',
      component:AddAddress,
      meta:{requiresAuth:true}
    },
    {
      path:'/updateInfo',
      name:'UpdateInfo',
      component:UpdateInfo,
      meta:{requiresAuth:true}
    }
  ],
  
})
