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

// import Navbar from '@/components/Navbar'
import TopBar from '@/components/Topbar'


export default {
  name: "App",
  components: {
    // Navbar,
    TopBar
  }
}
</script>

<style>
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/fontawesome.icons.all.min.css';
  @import './assets/css/fontawesome.icons.brands.min.css';
  @import './assets/css/style.css';
</style>
