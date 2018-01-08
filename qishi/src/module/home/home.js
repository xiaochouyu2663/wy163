import Vue from 'vue'
import App from './App'
 import router from './router'

/**
 * 
 */

// import Login from 'components/Login'
// import Home from 'components/Home'
// import Shopcar from 'components/Shopcar'
// import Person from 'components/Person'
// import Detail from 'components/Detail'
// import Settlement from 'components/Settlement'
// import Pay from 'components/Pay'
// import Myshop from 'components/Myshop'
// import Order from 'components/Order'
// import Game from 'components/Game'
// import Integral from 'components/Integral'
// import Address from 'components/Address'
// import News from 'components/News'
// import Share from 'components/Share'
// import PersonalInfo from 'components/PersonalInfo'
// import AddAddress from 'components/AddAddress'
// import UpdateInfo from 'components/UpdateInfo'
/**
 * 
 */
// import Router from 'vue-router'
// Vue.use(Router)
// var router=new Router({
//   routes: [
//     {
//       path:'/login',
//       name: 'Login',
//       component: Login,

//     },
//     {
//       path:'/',
//       name: 'Main',
//       component: Home,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/home/',
//       redirect:'/',
//       name: 'Home',
//       component: Home,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/shopcar',
//       name: 'Shopcar',
//       component: Shopcar,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/person',
//       name: 'Person',
//       component: Person,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/detail/:proid',
//       name: 'Detail',
//       component: Detail,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/settlement',
//       name: 'Settlement',
//       component: Settlement,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/pay',
//       name: 'Pay',
//       component: Pay,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/myshop',
//       name: 'Myshop',
//       component: Myshop,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/order',
//       name:'Order',
//       component:Order,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/game',
//       name:'Game',
//       component:Game,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/integral',
//       name:'Integral',
//       component:Integral,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/address/',
//       name:'Address',
//       component:Address,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/news',
//       name:'News',
//       component:News,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/share',
//       name:'Share',
//       component:Share,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/personalInfo',
//       name:'PersonalInfo',
//       component:PersonalInfo,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/addAddress',
//       name:'AddAddress',
//       component:AddAddress,
//       meta:{requiresAuth:true}
//     },
//     {
//       path:'/updateInfo',
//       name:'UpdateInfo',
//       component:UpdateInfo,
//       meta:{requiresAuth:true}
//     }  
//   ],
// })
import {getCookie} from '../../util/util'

import VueScroller from 'vue-scroller'
import Vuex from 'vuex'

import $ from 'jquery'


// const FastClick = require('fastclick')
// FastClick.attach(document.body)
//导入toast插件
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

// 导入alert插件
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

Vue.use(VueScroller)
Vue.use(Vuex)

const  vuex_store = new Vuex.Store({
  state:{
      userId:null,
      userToken:'',
      path:0,
      scrollPath:{
          x:0,
          y:0
      },
      homeProList:[],
      nowPage:1,
      loadWord:'',
      settleProduct:[
        {id:1,name:'小白系列1',price:123,num:2},
        {id:2,name:'小白系列2',price:443,num:1}
      ]
  },
  mutations:{
      updateUserId(state,userId){
        state.userId=userId;      //更改用户userid
      },
      updateUserToken(state,userToken){
        state.userToken=userToken;   //更改用户usertoken
    },
  }
})
// vuex_store.registerModule('vux', { // 名字自己定义
//     state: {
//       isLoading: false
//     },
//     mutations: {
//       updateLoadingStatus (state, payload) {
//         state.isLoading = payload.isLoading
//       }
//     }
//   })
  // routers.beforeEach( (to, from, next)=> {
  
  // if (to.matched.some(recode =>recode.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!getCookie('userToken')) {
      
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     vuex_store.commit('updateLoadingStatus', {isLoading: true})
  //     next()
  //   }
  // } else {
  //   vuex_store.commit('updateLoadingStatus', {isLoading: true})
  //   next();
  // }
    
  // })
  
  // routers.afterEach(function (to) {
  //   setTimeout(()=>{
  //       vuex_store.commit('updateLoadingStatus', {isLoading: false})
  //   },200)
    
  //   console.log('用户id',vuex_store.state.userId)
  //   console.log('用户token',vuex_store.state.userToken)
  // })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:vuex_store,
  router,
  template: '<App/>',
  components: { App }
})
