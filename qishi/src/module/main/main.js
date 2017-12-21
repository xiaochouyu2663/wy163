import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
import Vuex from 'vuex'

Vue.use(VueScroller)
Vue.use(Vuex)

const  vuex_store = new Vuex.Store({
  state:{
      path:0
  },
  mutations:{
      showpath(state){
          alert(state.path);
      }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:vuex_store,
  router,
  template: '<App/>',
  components: { App }
})