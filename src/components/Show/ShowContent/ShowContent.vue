<template>
  <div class="content">
    <h3>
      <span>
        {{show.name}}
      </span>
      <show-social-nav @vote="$emit('vote')" :show="show"></show-social-nav>
    </h3>
    <div class="sumary">
      <div v-html="getSummary(show)"></div>
    </div>
    <dl>
      <dt>Genres:</dt>
      <dd>
        {{ getGenres(show.genres) }}
        <br>
      </dd>
      <dt>Airs on</dt>
      <dd>
        {{ show.network.name }} - {{ show.network.countryCode }}
        <br>
      </dd>
      <dt>Schedule:</dt>
      <dd>
        {{ show.schedule.time }} - {{ getDays(show.schedule.days) }}
        <br>
      </dd>
      <dt>Status:</dt>
      <dd>
        {{ show.status }}
        <br>
      </dd>
    </dl>
  </div>
</template>

<script>
  import ShowSocialNav from '../ShowSocialNav/ShowSocialNav'
  export default {
    components: {ShowSocialNav},
    name: 'show-content',
    props: {
      show: {
        type: Object
      }
    },
    methods: {
      getGenres (genres) {
        return genres.join(', ')
      },
      getDays (days) {
        return days.join(', ')
      },
      getSummary (show) {
        return 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas'
      }
    }
  }
</script>

<style lang='scss' scoped src="./ShowContent.scss"></style>
