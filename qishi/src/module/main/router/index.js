import Vue from 'vue'
import Router from 'vue-router'
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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Main',
      component: Home
    },
    {
      path: '/home',
      redirect:'/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/detail/:proid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/myshop',
      name: 'Myshop',
      component: Myshop
    },
    {
      path:'/order',
      name:'Order',
      component:Order
    },
    {
      path:'/game',
      name:'Game',
      component:Game
    },
    {
      path:'/integral',
      name:'Integral',
      component:Integral
    },
    {
      path:'/address',
      name:'Address',
      component:Address
    },
    {
      path:'/news',
      name:'News',
      component:News
    },
    {
      path:'/share',
      name:'Share',
      component:Share
    },
    {
      path:'/personalInfo',
      name:'PersonalInfo',
      component:PersonalInfo
    },
    {
      path:'/addAddress',
      name:'AddAddress',
      component:AddAddress
    }
  ],
  
})
