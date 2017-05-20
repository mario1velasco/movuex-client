<template>
  <show-list
    :shows="shows"
  ></show-list>
</template>

<script>
  import { TVMazeApiService } from '../services'
  import ShowList from '../components/ShowList/ShowList'
  export default {
    components: {
      ShowList
    },
    name: 'ShowListContainer',
    data () {
      return {
        shows: null,
        service: null
      }
    },
    props: {
      criteria: String
    },
    watch: {
      criteria (value) {
        console.log(value)
        this.searchShows(value)
      }
    },
    created () {
      this.initService()
      this.initShows()
    },
    methods: {
      initService () {
        this.service = new TVMazeApiService()
      },
      initShows () {
        this.service.shows().then(response => {
          this.shows = response
        })
      },
      searchShows (criteria) {
        this.service.searchShows(criteria).then(response => {
          this.shows = response
        })
      }
    }
  }
</script>

