<template>
  <div>
    <search @search="onSearch"></search>
    <router-view name="action"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import MovieList from '../MovieList/MovieList'
  import Search from '../Search/Search'
  import mocks from '../../mock/films'
  export default {
    name: 'dashboard',
    components: {
      Search,
      MovieList
    },
    data () {
      return {
        films: mocks.Search
      }
    },
    methods: {
      onSearch (criteria) {
        this.$router.push({
          name: 'movieList',
          query: {
            criteria
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss" src="./Dashboard.scss"></style>
