<template>
  <div class="not-found">
    <h1>
      Not Found
    </h1>

    <p>
      Woops! Looks like this page doesn't exist
    </p>

    <router-link to='{ name: "movieList" }'>
      Go to index!
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style lang='scss' src='./NotFound.scss' scoped></style>
