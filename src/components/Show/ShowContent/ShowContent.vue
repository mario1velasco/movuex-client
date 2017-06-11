<template>
  <div class="content">
    <h3>
      <span>
        {{show.name}}
      </span>
      <show-social-nav @vote="$emit('vote')" :show="show"></show-social-nav>
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
    <chat-container :showId="show.showId"></chat-container>
  </div>
</template>

<script>
  import ShowSocialNav from '../ShowSocialNav/ShowSocialNav'
  import ChatContainer from '../../../containers/ChatContainer'
  export default {
    components: {
      ChatContainer,
      ShowSocialNav},
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
      }
    }
  }
</script>

<style lang='scss' scoped src="./ShowContent.scss"></style>
