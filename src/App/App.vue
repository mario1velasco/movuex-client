<template>
  <div id="app">
    <nav-bar :show="true"></nav-bar>
    <sidebar
      :show="sidebar.opened"
      :menuItems="menuItems"
    ></sidebar>
    <app-main></app-main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import Sidebar from '../components/Sidebar/Sidebar'
  import NavBar from '../components/NavBar/NavBar'
  import AppMain from '../components/AppMain/AppMain'
  import FooterBar from '../components/FooterBar/FooterBar'

  export default {
    name: 'app',
    components: {
      Sidebar,
      NavBar,
      AppMain,
      FooterBar
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
