<template>

  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img v-if='show.image && show.image.original'
               :src="show.image.original"
               :alt="`${show.name} poster`" class="poster">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <h3>{{show.name}}</h3>
          <div class="sumary" v-html="show.summary"></div>
          <p>
            <small>Genres: {{ getGenres(show.genres) }}</small>
          </p>
          <p>
            <small>Airs on: {{ show.network.country.name }} - {{ show.network.name }} </small>
          </p>
          <p>
            <small>Schedule: {{ show.schedule.days[0] }} - {{ show.schedule.time }} </small>
          </p>
          <p>
            <small>Status: {{ show.status }} </small>
          </p>
          <p>
            <small>Show type: {{ show.type }} </small>
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    <div v-if="!show" class="column">
      Show no encontrado
    </div>
  </div>
</template>

<script>
  import ShowCard from '../ShowCard/ShowCard'
  export default {
    components: {ShowCard},
    name: 'Show',
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

<style lang='scss' src="./Show.scss"></style>
