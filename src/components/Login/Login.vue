<template>
  <div class="not-found">
    <a href="/user/twitter">
      Twitter
    </a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Login',
    methods: {
      ...mapActions([
        'socialLogin'
      ]),
      onClickTwitter () {
        this.socialLogin()
      }
    }
  }
</script>

<style lang='scss' src='./Login.scss' scoped></style>
