<template>
  <article>
    <figure>
      <router-link :to="{name: 'show', params: {showId: show.id}}">
        <img v-cloak :src="show.image.medium" :alt="show.name">
      </router-link>
      <figcaption>
        {{ show.name }} - {{ show.premiered }}
      </figcaption>
    </figure>
  </article>
</template>

<script>
  export default {
    name: 'show-item',
    props: {
      show: {
        type: Object
      }
    }
  }
</script>

<style lang='scss' src="./ShowItem.scss"></style>
