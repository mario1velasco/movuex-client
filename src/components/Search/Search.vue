<template>
  <form class='search' name='search' @submit.prevent='onSubmit'>
    <div class="field">
      <p class="control has-icon">
        <input
          type='text'
          name='criteria'
          placeholder='Search show ...'
          ref='criteria'
          v-model='criteria'
          autofocus
          class="input"
        />
        <span class="icon is-small">
          <i class="fa fa-film"></i>
        </span>
      </p>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        criteria: null
      }
    },
    methods: {
      onSubmit () {
        this.$emit('search', this.criteria)
      }
    }
  }
</script>

<style lang="scss" src="./Search.scss"></style>
