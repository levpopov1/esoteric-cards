<template>
  <div>
      <h3 class="subtitle">Add User</h3>
      <form class="mb-4" @submit="onSubmit">
        <div class="form-row align-items-end">
          <div class="col">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" v-model="name" placeholder="John Doe">
          </div>
          <div class="col">
            <label for="company">Company</label>
            <input type="text" id="company" class="form-control" v-model="company.name" placeholder="Work.LLC">
          </div>
          <div class="col">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" v-model="email" placeholder="John.Doe@work.com">
          </div>
          <div class="col">
            <input type="submit" class="btn btn-primary" value="Submit">
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "AddUser",
    data() {
      return {
        name: '',
        company: {
          name: '',
        },
        email: ''
      }
    },
    methods: {
      ...mapActions(['addUser']),
      onSubmit(e){
        e.preventDefault();
        this.addUser(this.$data);
      }
    }
}
</script>

<style>

</style>