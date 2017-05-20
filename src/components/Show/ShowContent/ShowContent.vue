<template>
  <div class="content">
    <h3>
      <span>
        {{show.name}}
      </span>
      <show-social-nav :show="show"></show-social-nav>
    </h3>
    <div class="sumary">
      <div v-html="show.summary"></div>
    </div>
    <dl>
      <dt>Genres:</dt>
      <dd>
        {{ getGenres(show.genres) }}
        <br>
      </dd>
      <dt>Airs on</dt>
      <dd>
        {{ show.network.country.name }} - {{ show.network.name }}
        <br>
      </dd>
      <dt>Schedule:</dt>
      <dd>
        {{ show.schedule.days[0] }} - {{ show.schedule.time }}
        <br>
      </dd>
      <dt>Status:</dt>
      <dd>
        {{ show.status }}
        <br>
      </dd>
      <dt>
        Show type:
      </dt>
      <dd>
        {{ show.type }}
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
      }
    }
  }
</script>

<style lang='scss' scoped src="./ShowContent.scss"></style>
