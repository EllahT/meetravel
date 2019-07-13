<template>
  <div class="admin">
    <h1>Admin Page</h1>
    <user-list :type="'admin'" :users="users"></user-list>

  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';

export default {
  created() {
    this.$store.dispatch({type: 'loadUsers'});
  },

  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  
  components: {
    UserList
  }
}
</script>
