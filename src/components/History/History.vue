<template>
  <div class="history">
    <div class="history-list" v-if="filmsWithNotes">

    </div>
    <template v-else>
      <i class="fa fa-sticky-note-o empty-notes" aria-hidden="true"></i>
      <p class="no-results">
        Ninguna nota añadida
      </p>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'history',
    data () {
      return {
        filmsWithNotes: null
      }
    }

  }
</script>

<style lang="scss" src="./History.scss" scoped></style>
