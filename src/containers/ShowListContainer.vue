<template>
  <show-list
    :shows="shows"
  ></show-list>
</template>

<script>
  import ShowList from '../components/ShowList/ShowList'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      ShowList
    },
    name: 'ShowListContainer',
    data () {
      return {
        service: null
      }
    },
    computed: {
      ...mapState([
        'shows'
      ])
    },
    props: {
      criteria: String
    },
    watch: {
      criteria (value) {
        this.searchShows(value)
      }
    },
    created () {
      this.initShows()
    },
    methods: {
      ...mapActions([
        'getShows',
        'searchShows'
      ]),
      initShows () {
        this.getShows()
      }
    }
  }
</script>

