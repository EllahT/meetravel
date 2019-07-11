<template>
  <div>
      <div class="top-bar">
        <user-filter :currFilter="filters" @filterChanged="setFilter"></user-filter>
      </div>
      <img v-if="loadingUsers" src="@/assets/loading.gif"/>
      <user-list v-else :users="users"></user-list>
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
      }
  },

  components: {
      UserFilter,
      UserList
  }
};
</script>
