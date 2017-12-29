import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
import Vuex from 'vuex'

import $ from 'jquery'


// const FastClick = require('fastclick')
// FastClick.attach(document.body)

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
      userId:1,
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
      showpath(state){
          alert(state.path);
      }
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
router.beforeEach(function (to, from, next) {
    
    vuex_store.commit('updateLoadingStatus', {isLoading: true})
    next();
  })
  
  router.afterEach(function (to) {
    setTimeout(()=>{
        vuex_store.commit('updateLoadingStatus', {isLoading: false})
    },200)
    
    
  })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:vuex_store,
  router,
  template: '<App/>',
  components: { App }
})
