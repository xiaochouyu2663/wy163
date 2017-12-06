import Vue from 'vue'
import App from './App'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
// Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
