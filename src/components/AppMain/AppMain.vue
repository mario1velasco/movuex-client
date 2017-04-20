<template>
  <section class="app-main">
    <div class="container is-fluid is-marginless app-content">
      <level-bar></level-bar>
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
  import LevelBar from '../LevelBar/LevelBar'

  export default {
    name: 'app-main',
    components: {
      LevelBar
    }
  }
</script>

<style lang="scss" src="./AppMain.scss"></style>
