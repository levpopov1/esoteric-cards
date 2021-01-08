<template>
  <div class="col-sm-3 mb-4">
    <div  class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{{ card.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Card",
  computed: mapGetters([""]),
  props: ["card"]
};
</script>

<style>
</style>