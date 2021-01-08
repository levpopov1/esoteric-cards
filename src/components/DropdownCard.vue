<template>
  <div class="col-sm-2 my-3">
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          This is some text within a card body.
        </p>
      </div>
      <div class="card-footer text-center">
        <router-link v-bind:to="'/' + category + '/' + item.slug" class="card-link stretched-link">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DropdownCard',
    components: {

    },
    methods: {

    },
    props: ['item', 'category']
  }
</script>

<style>

</style>