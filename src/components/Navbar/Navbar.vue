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
          <a class="nav-item hero-brand" href="/">
            <img src="http://fakeimg.pl/250x100/" :alt="pkgInfo.description">
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
          </a>
        </div>
        <div class="nav-right is-flex"></div>
      </nav>
    </div>
  </section>
</template>

<script>
  import * as pkg from '../../../package.json'
  import Tooltip from 'vue-bulma-tooltip'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'navbar',
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

<style lang="scss" src="./Navbar.scss"></style>
