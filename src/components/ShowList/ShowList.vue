<template>
  <div class="show-list">
    <ul v-if="shows">
      <li v-for="show in shows">
        <transition appear name="fade">
          <show-item :show="show"></show-item>
        </transition>
      </li>
    </ul>
    <p class="no-results" v-else>
      No hay resultados
    </p>
  </div>
</template>

<script>
  import ShowItem from '../ShowItem/ShowItem'
  export default {
    components: {ShowItem},
    name: 'ShowList',
    props: {
      shows: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang='scss' src="./ShowList.scss"></style>
