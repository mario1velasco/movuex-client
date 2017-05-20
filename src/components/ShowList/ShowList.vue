<template>
  <div class="show-list">
    <ul v-if="shows">
      <li v-for="show in shows">
        <transition appear name="fade">
          <article>
            <figure>
              <router-link :to="{name: 'show', params: {showId: show.id}}">
                <img v-cloak :src="show.image.medium" :alt="show.name">
              </router-link>
              <figcaption>
                {{ show.name }} - {{ show.premiered }}
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
