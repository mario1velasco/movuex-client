<template>
  <div id="app">
    <navbar :show="true"></navbar>
    <sidebar
      :show="sidebar.opened && !sidebar.hidden"
      :menuItems="menuItems"
    ></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import Sidebar from '../components/Sidebar/Sidebar'
  import Navbar from '../components/Navbar/Navbar'

  export default {
    name: 'app',
    components: {
      Sidebar,
      Navbar
    },
    computed: {
      ...mapState({
        menuItems: state => state.menuItems,
        sidebar: state => state.sidebar
      })
    },
    methods: {
      ...mapMutations([
        'toggleDevice',
        'toggleSidebar'
      ])
    },
    beforeMount () {
      const { body } = document
      const WIDTH = 768
      const RATIO = 3

      const handler = () => {
        if (!document.hidden) {
          let rect = body.getBoundingClientRect()
          let isMobile = rect.width - RATIO < WIDTH
          this.toggleDevice(isMobile ? 'mobile' : 'other')
          this.toggleSidebar(!isMobile)
        }
      }

      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler)
    }
  }
</script>
<style lang="scss" src="./App.scss"></style>
