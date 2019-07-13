<template>
  <div class="app-home">
      <div class="top-bar">
        <h1>There are {{users.length}} Fellow Travelers in {{location}}</h1>
        <user-filter :currFilter="filters" @filterChanged="setFilter"></user-filter>
      </div>
      <user-preview :user="users[currUserIdx]" @nav="navUsers"></user-preview>
      <!-- <img v-if="loadingUsers" src="@/assets/loading.gif"/> -->
  </div>
</template>

<script>
import UserFilter from '@/components/UserFilter.vue';
import UserPreview from '@/components/UserPreview.vue';

export default {
  created() {
    this.$store.dispatch({type: 'loadUsers'});
  },

  data() {
    return {
      currUserIdx: 0
    }
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
      },

      location() {
        return this.$store.getters.location.address;
      }
  },

  methods: {
      setFilter(filters) {
        this.$store.dispatch({type:'setFilter', filters});
      },

      navUsers(diff) {
        this.currUserIdx += diff;
      }
  },

  components: {
      UserFilter,
      UserPreview
  }
};
</script>

<style>
  .app-home {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
