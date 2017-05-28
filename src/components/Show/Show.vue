<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <show-figure :show="show"></show-figure>
      </div>
      <div class="media-content">
        <show-content @vote="onVote" :show="show"></show-content>
      </div>
    </article>
    <show-not-found v-if="!show"></show-not-found>
  </div>
</template>

<script>
  import ShowCard from '../ShowItem/ShowItem'
  import ShowSocialNav from './ShowSocialNav/ShowSocialNav'
  import ShowContent from './ShowContent/ShowContent'
  import ShowFigure from './ShowFigure/ShowFigure'
  import ShowNotFound from './ShowNotFound/ShowNotFound'
  import { mapActions } from 'vuex'
  import { RealTimeService } from '../../services/'

  export default {
    components: {
      ShowNotFound,
      ShowFigure,
      ShowContent,
      ShowSocialNav,
      ShowCard
    },
    name: 'Show',
    props: {
      show: {
        type: Object
      }
    },
    methods: {
      ...mapActions([
        'addVote'
      ]),
      onVote () {
        this.addVote(this.show)
      },
      initSocket () {
        const service = RealTimeService.getInstance()
        service.onAddedVote().then(_ => console.log(_))
      }
    },
    created () {
      this.initSocket()
    }
  }
</script>

<style lang='scss' scoped src="./Show.scss"></style>
