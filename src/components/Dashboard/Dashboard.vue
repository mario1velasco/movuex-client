<template>
  <div>
    <search></search>
    <movie-list></movie-list>
  </div>
</template>

<script>
  import MovieList from '../MovieList/MovueList'
  import Search from '../Search/Search'
  export default {
    name: 'dashboard',
    components: {
      Search,
      MovieList
    }
  }
</script>
<style scoped lang="scss" src="./Dashboard.scss"></style>
