<template>
  <div class="col-sm-3 my-3">
    <div class="card">
      <img :src="deck.img" class="card-img-top" alt="">
      <div class="card-body">
        <router-link :to="'/' + category.slug + '/' + vendor.slug + '/' + deck.slug">{{ deck.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
  export default {
    name: "Deck",
    props: ["vendor", "category", "deck"],
    computed: {
      // ...mapGetters(["getDecks"]),
      // decks(){
      //   let selection = this.getDecks.filter(item => item.vendor == this.vendor.name);
      //   return selection.length > 0 ? selection : {};
      // }
    },
    components: {
      
    },
    // methods:{
    // ...mapActions(["fetchDecks"])
    // },
    // created(){
    //   this.fetchDecks();
    // }
  }
</script>

<style>

</style>