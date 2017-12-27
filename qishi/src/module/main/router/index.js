import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Shopcar from 'components/Shopcar'
import Person from 'components/Person'
import Detail from 'components/Detail'
import Settlement from 'components/Settlement'
import Pay from 'components/Pay'

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
    }
  ],
  
})
