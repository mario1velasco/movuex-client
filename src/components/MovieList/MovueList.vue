<template>
  <div class="movie-list">
    <ul v-if="films">
      <li v-for="film in films">
        <transition appear name="fade">
          <article>
            <figure>
              <img v-cloak :src="film.Poster" :alt="film.Title">
              <figcaption>
                {{ film.Title }} {{ film.Year }}
              </figcaption>
            </figure>
          </article>
        </transition>
      </li>
    </ul>
    <p class="no-results" v-else>
      No hay resultados
    </p>
  </div>
</template>

<script>
  import mocks from '../../mock/films'
  export default {
    name: 'MovieList',
    data () {
      return {
        films: mocks.Search
      }
    }
  }
</script>

<style lang='scss' src="./MovieList.scss"></style>
