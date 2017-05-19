<template>
  <div class="movie-list">
    <ul v-if="films">
      <li v-for="film in films">
        <transition appear name="fade">
          <article>
            <figure>
              <router-link :to="{name: 'movie', params: {film: film.imdbID}}">
                <img v-cloak :src="film.Poster" :alt="film.Title">
              </router-link>
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
  import { OmdbApiService } from '../../services/TVMazeApiService'
  export default {
    name: 'MovieList',
    data () {
      return {
        films: null
      }
    },
    props: {
      criteria: {
        type: String,
        default: ''
      },
      prueba: {
        type: String
      }
    },
    watch: {
      criteria (value) {
        OmdbApiService.getFilms(value)
          .then((response) => {
            this.films = response.Search
          })
      }
    }
  }
</script>

<style lang='scss' src="./MovieList.scss"></style>
