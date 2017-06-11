<template>
  <chat
    :showId="showId"
  ></chat>
</template>

<script>
  import Chat from '../components/Chat/Chat'
  export default {
    components: {Chat},
    name: 'ChatContainer',
    props: {
      showId: {
        require: true
      }
    }
  }
</script>

