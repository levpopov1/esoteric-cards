<template>
  <div id="users">
    <AddUser/>
    <UserList/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'


export default {
  name: 'Users',
  components: {
    UserList,
    AddUser
  }
}
</script>
