<template>
  <div class="card" v-if='show'>
    <div class="card-image">
      <figure class="image is-4by3">
        <img v-if='show.image && show.image.medium'
             :src="show.image.medium"
             :alt="`${show.name} poster`" class="poster">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img v-if='show.image && show.image.medium'
                 :src="show.image.medium"
                 :alt="`${show.name} poster`" class="poster">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ show.name }}</p>
          <p class="subtitle is-6"> {{ show.premiered }}</p>
        </div>
      </div>
    </div>
    <div v-if="!show">
      Show no encontrado
    </div>
  </div>
</template>

<script>
  export default {
    name: 'show-card',
    props: {
      show: {
        type: Object
      }
    }
  }
</script>

<style lang='scss' src="./ShowCard.scss"></style>
