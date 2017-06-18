import Vue from 'vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false
Vue.config.ENV = process.env

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
})
