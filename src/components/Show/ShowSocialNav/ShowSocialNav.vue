<template>
  <nav class="level is-mobile">
    <div class="level-left">
      <a class="level-item">
        <span class="icon is-small"><i class="fa fa-retweet"></i></span>
      </a>
      <a class="level-item">
        <span class="icon is-small"><i class="fa fa-heart"></i></span>
      </a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'show-social-nav',
    props: {
      show: {
        type: Object
      }
    }
  }
</script>

<style lang='scss' src="./ShowSocialNav.scss"></style>
