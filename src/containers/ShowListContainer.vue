<template>
  <show
    :show="show"
    v-if="show"
  ></show>
</template>

<script>
  import Show from '../components/Show/Show'
  import { TVMazeApiService } from '../services'
  export default {
    components: {Show},
    name: 'ShowContainer',
    props: {
      showId: {
        type: String,
        require: true
      }
    },
    data () {
      return {
        show: null,
        service: null
      }
    },
    created () {
      this.service = new TVMazeApiService()
      this.service.getShow(this.showId).then(response => {
        this.show = response
      })
    }
  }
</script>

