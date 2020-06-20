<template>
  <div id="users">
    <h1 class="title">User Profiles</h1>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
      <div class="col mb-4" v-for="user in allUsers" v-bind:key="user.id">
        <div  class="card h-100">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ user.name }}</h5>
            <h6 class="card-subtitle mb-3 text-success">{{ user.company.name }}</h6>
            <p class="card-text">
              <a :href="'mailto:' + user.email">{{ user.email }}</a>
            </p>
            <p class="card-text">
              {{ user.address && user.address.street }} <br/>
              {{ user.address && user.address.suite }} <br/>
              {{ user.address && user.address.zipcode }} <br/>
              {{ user.address && user.address.city }} <br/>
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted" v-if="user.website"><a :href="'https://' + user.website">{{ user.website }}</a></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  methods: {
    ...mapActions(['fetchUsers'])
  },
  computed: {
    ...mapGetters(["allUsers"]),
  },
  created(){
    this.fetchUsers();
  }
};
</script>

<style>
</style>