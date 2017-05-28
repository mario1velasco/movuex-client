import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters/getters'
import * as actions from './actions/index'
import * as mutations from './mutations/index'

Vue.use(Vuex)
const state = {
  menuItems: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'fa-tachometer'
      }
    }
  ],
  sidebar: {
    opened: false,
    hidden: false
  },
  device: {
    isMobile: false,
    isTablet: false
  },
  shows: [],
  show: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
