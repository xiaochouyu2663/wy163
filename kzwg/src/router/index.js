import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import PersonalSet from '@/components/personal/PersonalSet'
// const Login = resolve => require(['./@components/Login.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/personal/personalset',
      name: 'PersonalSet',
      component: PersonalSet
    }
  ]
})
