<template>
  <div class="social">
    <a href="https://github.com/zucchinidev" target="_blank">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a href="https://twitter.com/zucchinidev" target="_blank">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
    <div>
      <a href="https://github.com/zucchinidev" target="_blank">Licencia</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'social-sidebar'
  }
</script>
<style lang="scss" scoped>
  .social {
    text-align: center;
    position: absolute;
    bottom: 1vh;
    width: 100%;
  }
</style>
