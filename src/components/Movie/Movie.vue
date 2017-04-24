<template>
  <div class="movie" v-if='movie'>
    <img v-if='movie.Poster != "N/A"'
         :src="movie.Poster"
         :alt="`${movie.Title} poster`" class="poster">
    <div class="data">
      <h2>
        {{ movie.Title }}
      </h2>
      <p class="plot">
        {{ movie.Plot }}
      </p>

      <aside class="movie-data">
        <dl>
          <dt>
            Genre
          </dt>
          <dd>
            {{ movie.Genre }}
          </dd>
          <dt>
            Year
          </dt>

          <dd>
            {{ movie.Year }}
          </dd>

          <dt>
            Director
          </dt>
          <dd>
            {{ movie.Director }}
          </dd>

          <dt>
            Actors
          </dt>

          <dd>
            {{ movie.Actors }}
          </dd>

          <dt>
            Runtime
          </dt>

          <dd>
            {{ movie.Runtime }}
          </dd>
          <dt>
            Rating
          </dt>

          <dd>
            {{ movie.imdbRating }}
          </dd>

        </dl>

      </aside>
    </div>
  </div>
</template>

<script>
  import mock from '../../mock/films'
  export default {
    name: 'Movie',
    props: {
      film: {
        type: String,
        require: true
      }
    },
    created () {
      this.getFilm()
      console.log(this.film)
    },
    methods: {
      getFilm () {
        this.movie = mock.Search.find(f => f.imdbID === this.film)
      }
    }
  }
</script>

<style lang='scss' src="./Movie.scss"></style>
