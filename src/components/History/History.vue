<template>
  <div class="history">
    <div class="history-list" v-if="currentShow && currentShow.notes.length > 0">
      <ul>
        <li v-for="note in currentShow.notes">{{note.text}}</li>
      </ul>
    </div>
    <template v-else>
      <p class="no-results">
        Ninguna nota añadida
      </p>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'history',
    props: ['currentShow']
  }
</script>

<style lang="scss" src="./History.scss" scoped></style>
