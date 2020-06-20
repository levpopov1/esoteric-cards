<template>
  <div id="deck">
    <h1 class="title">Deck of Cards</h1>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
      <div class="col mb-4" v-for="card in allCards" v-bind:key="card.id">
        <div  class="card">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Deck",
  computed: mapGetters(["allCards"])
};
</script>

<style>
</style>