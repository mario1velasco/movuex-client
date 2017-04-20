<template>
  <form class='search' name='search' v-on:submit.prevent='onSubmit'>
    <div class="field">
      <p class="control has-icon">
        <input
          type='text'
          name='criteria'
          placeholder='Escribe una película ...'
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
    <p v-show="criteria">Criterio de busqueda: {{ criteria | capitalize }}</p>
  </form>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        criteria: undefined
      }
    },
    methods: {
      onSubmit () {
        console.log('search', this.criteria)
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style lang="scss" src="./Search.scss"></style>
