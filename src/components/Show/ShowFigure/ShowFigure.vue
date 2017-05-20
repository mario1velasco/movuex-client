<template>
  <figure class="image is-128x128">
    <img v-if='show.image && show.image.original'
         :src="show.image.original"
         :alt="`${show.name} poster`" class="poster">
  </figure>
</template>

<script>
  export default {
    name: 'show-figure',
    props: {
      show: {
        type: Object
      }
    },
    methods: {
      getGenres (genres) {
        return genres.join(', ')
      }
    }
  }
</script>

<style lang='scss' scoped src="./ShowFigure.scss"></style>
