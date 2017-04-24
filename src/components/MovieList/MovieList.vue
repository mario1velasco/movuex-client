<template>
  <div class="movie-list">
    <ul v-if="foundFilms">
      <li v-for="film in foundFilms">
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
  import mock from '../../mock/films'
  export default {
    name: 'MovieList',
    props: {
      criteria: {
        type: String
      },
      prueba: {
        type: String
      }
    },
    computed: {
      foundFilms () {
        const { Search: films } = mock
        return films.filter(film => film.Title.includes(this.criteria))
      }
    }
  }
</script>

<style lang='scss' src="./MovieList.scss"></style>
