<template>
  <div id="app">
    <!-- <Navbar/> -->
    <TopBar/>
    <div class="container-fluid bg-light">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import Navbar from '@/components/Navbar'
import TopBar from '@/components/Topbar'

export default {
  name: "App",
  components: {
    // Navbar,
    TopBar
  },
  methods:{
    ...mapActions(["fetchDecks", "fetchVendors", "fetchCategories"])
  },
  created(){
    this.fetchCategories();
    this.fetchVendors();
    this.fetchDecks();
  }
}
</script>

<style>
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/fontawesome.icons.all.min.css';
  @import './assets/css/fontawesome.icons.brands.min.css';
  @import './assets/css/style.css';
</style>
