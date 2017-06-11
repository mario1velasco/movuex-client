<template>
  <show
    :show="show"
    v-if="show"
  ></show>
</template>

<script>
  import Show from '../components/Show/Show'
  import { mapActions, mapState } from 'vuex'
  export default {
    components: {Show},
    name: 'ShowContainer',
    props: {
      showId: {
        require: true
      }
    },
    computed: {
      ...mapState([
        'show'
      ])
    },
    methods: {
      ...mapActions([
        'getShow'
      ])
    },
    created () {
      this.getShow(this.showId)
    }
  }
</script>

