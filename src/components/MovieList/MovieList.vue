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
  export default {
    name: 'MovieList',
    props: {
      films: {
        type: Array
      }
    }
  }
</script>

<style lang='scss' src="./MovieList.scss"></style>
