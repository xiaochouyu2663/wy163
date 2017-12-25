import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
import Vuex from 'vuex'

// const FastClick = require('fastclick')
// FastClick.attach(document.body)

import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)


Vue.use(VueScroller)
Vue.use(Vuex)

const  vuex_store = new Vuex.Store({
  state:{
      path:0,
      scrollPath:{
          x:0,
          y:0
      },
      homeProList:[]
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
