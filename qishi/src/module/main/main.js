import Vue from 'vue'
import App from './App'
import router from './router'
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
vuex_store.registerModule('vux', { // 名字自己定义
    state: {
      isLoading: false
    },
    mutations: {
      updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
      }
    }
  })
router.beforeEach( (to, from, next)=> {
  
  if (to.matched.some(recode =>recode.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!getCookie('userToken')) {
      
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      vuex_store.commit('updateLoadingStatus', {isLoading: true})
      next()
    }
  } else {
    vuex_store.commit('updateLoadingStatus', {isLoading: true})
    next();
  }
    
  })
  
  router.afterEach(function (to) {
    setTimeout(()=>{
        vuex_store.commit('updateLoadingStatus', {isLoading: false})
    },200)
    
    console.log('用户id',vuex_store.state.userId)
    console.log('用户token',vuex_store.state.userToken)
  })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:vuex_store,
  router,
  template: '<App/>',
  components: { App }
})
