<template>
  <div id="deck">
    <h1 class="title my-3">{{ currentDeck.name }} by {{ currentDeck.vendor }}</h1>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
      <Card v-for="card in currentDeck.cards" v-bind:key="card.card_id" v-bind:card="card"/>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from "vuex";
  import Card from '@/components/Card'
  export default {
    name: 'DeckView',
    components: {
      Card
      // Sidebar,
    },
    computed:{
      ...mapGetters(["getDecks"]),
      currentDeck: function(){
        console.log("setting current deck")
        return this.getDecks.find(item => item.slug == this.$route.params.deck)
      }
    },
    methods:{
      ...mapMutations(["setCurrentDeck"])
    },
    watch:{
      currentDeck(newValue){
        console.log(newValue)
        this.setCurrentDeck({name: newValue.name, slug: newValue.slug});
      }
    }
  }
</script>

<style>

</style>