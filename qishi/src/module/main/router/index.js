import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Person from 'components/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Home',
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
    }
  ]
})
