<template>
  <div>
      <div class="top-bar">
        <user-filter :currFilter="filters" @filterChanged="setFilter"></user-filter>
      </div>
      <!-- <img v-if="loadingUsers" src="@/assets/loading.gif"/> -->
      <user-list :users="users" @delete-user="deleteUser"></user-list>
  </div>
</template>

<script>
import UserFilter from '@/components/UserFilter.vue';
import UserList from '@/components/UserList.vue';

export default {
  created() {
    this.$store.dispatch({type: 'loadUsers'})
  },

  computed: {
      users() {
        // console.log(this.$store.getters.users)
          return this.$store.getters.users;
      },

      filters() {
          return this.$store.getters.filters;
      },

      loadingUsers() {
        return this.$store.getters.isLoadingUsers;
      }
  },

  methods: {
      setFilter(filters) {
        this.$store.dispatch({type:'setFilter', filters});
      },
      deleteUser(userId) {
        // console.log('user ID to delete:', userId); 
        this.$store.dispatch({type:'deleteUser', userId});
      }
  },

  components: {
      UserFilter,
      UserList
  }
};
</script>
