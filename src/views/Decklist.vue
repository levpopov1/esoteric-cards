<template>
  <div id="home">
      <h1>Decklist</h1>
      <div class="row">
        <Deck v-bind:vendor="vendor" v-bind:category="category" v-bind:deck="deck" v-for="deck in decks" v-bind:key="deck.id"/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Deck from '@/components/Deck'
// import Sidebar from '@/components/Sidebar'
import { mapGetters, mapActions, mapMutations } from "vuex";
import Deck from '@/components/Deck'

export default {
  name: 'Decklist',
  components: {
    Deck
  },
  computed:{
    ...mapGetters(["getVendors", "getCategories", "getDecks"]),
    decks(){
      let selection = this.getDecks.filter(item => item.vendor == this.vendor.name);
      return selection.length > 0 ? selection : {};
    },
    vendor(){
      return this.getVendors.find(item => item.slug == this.$route.params.vendor)
    },
    category(){
      return this.getCategories.find(item => item.slug == this.$route.params.category)
    }
  },
  methods:{
    ...mapMutations(["setCurrentCategory", "setCurrentVendor"])
  },
  watch:{
    vendor(newValue){
      console.log(newValue)
      this.setCurrentVendor({name: newValue.name, slug: newValue.slug});
    },
    category(newValue){
      console.log(newValue)
      this.setCurrentCategory({name: newValue.name, slug: newValue.slug})
    }
  }
}

</script>
