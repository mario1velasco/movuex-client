<template>
  <div>
    <search @search="onSearch"></search>
    <router-view name="action"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import Search from '../Search/Search'
  import ShowListContainer from '../../containers/ShowListContainer'
  import ShowContainer from '../../containers/ShowContainer'
  export default {
    name: 'dashboard',
    components: {
      Search,
      ShowListContainer,
      ShowContainer
    },
    methods: {
      onSearch (criteria) {
        this.$router.push({
          name: 'showList',
          query: {
            criteria
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss" src="./Dashboard.scss"></style>
