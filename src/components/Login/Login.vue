<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-content">
        <p class="title">
          “Movuex”
        </p>
        <p class="subtitle">
          Accede a ver toda la información de tus series favoritas
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
      <span>
        <a href="/user/twitter" class="button twitter">
          Login with Twitter
        </a>
      </span>
        </p>
        <p class="card-footer-item">
          <a href="#" disabled class="button facebook">
            Login with Facebook
          </a>
        </p>
      </footer>
    </div>
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
