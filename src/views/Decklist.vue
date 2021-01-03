<template>
  <div id="home">
      <h1>Decklist</h1>
      <Decks v-bind:category="this.$route.params.category"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Deck from '@/components/Deck'
// import Sidebar from '@/components/Sidebar'
import Decks from '@/components/Decks'

export default {
  name: 'Decklist',
  components: {
    Decks
  }
}

</script>
