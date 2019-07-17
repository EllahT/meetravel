<template>
  <div class="app-home">
      <div class="top-bar">
        <h1 v-if="users">There are {{users.length}} Fellow Travelers in {{location}}</h1>
      </div>
        <input type="text" placeholder="Search travelers by name" v-model="filterByName" @input="setFilter"/>
      
      <user-preview  v-if="users" :user="users[currUserIdx]" @nav="navUsers" @request="sendRequest"></user-preview>
      <!-- <img v-if="loadingUsers" src="@/assets/loading.gif"/> -->
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';

export default {
  created() {
    this.$store.dispatch({type: 'loadUsers'});
  },

  data() {
    return {
      currUserIdx: 0,
      filterByName: null
    }
  },

  computed: {
      users() {
          return this.$store.getters.users;
      },

      loadingUsers() {
        return this.$store.getters.isLoadingUsers;
      },

      location() {
        return this.$store.getters.location.address;
      }
  },

  methods: {
      navUsers(diff) {
        if ((this.currUserIdx === 0 && diff < 0) || (this.currUserIdx === this.users.length-1 && diff > 0)) return;
        this.currUserIdx += diff;
      },

      setFilter() {
        this.$store.dispatch({type: 'setFilterByName', filterByName: this.filterByName});
      },

      sendRequest(userId) {
        console.log('sent a request to ',userId);
      }
  },

  components: {
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
