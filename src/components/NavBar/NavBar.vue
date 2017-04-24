<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <router-link class="nav-item hero-brand" :to="{name: 'movieList'}">
            <tooltip
              :label="`v${pkgInfo.version}`"
              placement="right"
              type="success"
              size="small"
              :no-animate="true"
              :always="true" :rounded="true"
            >
              <div class="is-hidden-mobile">
                <span class="vue">Mo</span><strong class="admin">vuex</strong>
              </div>
            </tooltip>
          </router-link>
        </div>
        <div class="nav-right is-column-flex">
         <social-nav-bar></social-nav-bar>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
  import Tooltip from 'vue-bulma-tooltip'
  import { mapMutations, mapState } from 'vuex'
  import * as pkg from '../../../package.json'
  import SocialNavBar from './SocialNavBar/SocialNavBar'

  export default {
    name: 'nav-bar',
    data () {
      return {
        pkgInfo: pkg
      }
    },
    computed: {
      ...mapState([
        'sidebar'
      ])
    },
    components: {
      SocialNavBar,
      Tooltip
    },
    props: {
      show: Boolean
    },
    methods: {
      ...mapMutations([
        'toggleSidebar'
      ])
    }
  }
</script>

<style lang="scss" src="./NavBar.scss"></style>
