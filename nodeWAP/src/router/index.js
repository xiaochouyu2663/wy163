import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MemberCenter from '@/components/MemberCenter'
import ProductSearch from '@/components/ProductSearch'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/memberCenter',
      name: 'MemberCenter',
      component: MemberCenter
    },
    {
      path: '/productSearch',
      name: 'ProductSearch',
      component: ProductSearch
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
