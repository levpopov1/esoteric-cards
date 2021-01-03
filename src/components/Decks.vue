<template>
  <div class="row">
    <div class="col-sm-3 my-3" v-for="deck in decks" v-bind:key="deck.id">
      <div class="card">
        <img :src="deck.img" class="card-img-top" alt="">
        <div class="card-body">
          <router-link :to="category + '/' + deck.slug">{{ deck.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    name: "Decks",
    props: ["category"],
    computed: {
      ...mapGetters(["decklist"]),
      decks: function(){
        let selection = this.decklist.filter(item => item.category == this.$route.params.category);
        return selection.length > 0 ? selection[0].decks : {};
      }
    },
    components: {
      
    },
  }
</script>

<style>

</style>