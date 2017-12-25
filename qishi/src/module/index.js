import Vue from 'vue'
import Vuex from 'vuex'
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
new Vue({
    store:vuex_store,
})