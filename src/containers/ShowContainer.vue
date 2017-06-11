<template>
  <show
    :show="show"
    v-if="show"
    @addNote="onAddNote"
    @vote="onVote"
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
        'getShow',
        'addVote',
        'addNote'
      ]),
      onVote () {
        this.addVote(this.show)
      },
      onAddNote (text) {
        const note = {text, user: '@zucchinidev'}
        const { showId } = this.show
        this.addNote('addNote', {note, showId})
      }
    },
    created () {
      this.getShow(this.showId)
    }
  }
</script>

