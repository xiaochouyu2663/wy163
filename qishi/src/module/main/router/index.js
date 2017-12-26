import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Person from 'components/Person'
import Detail from 'components/Detail'
import Settlement from 'components/Settlement'

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
    }
  ],
  
})
