import Vue from 'vue'
import App from './App/App'
import router from './router'
import store from './store/'
import { RealTimeService } from '../src/services'

Vue.config.productionTip = false
Vue.config.ENV = process.env

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted () {
    RealTimeService.getInstance({
      realTimeUrl: Vue.config.ENV.REAL_TIME_URL
    })
  }
})
