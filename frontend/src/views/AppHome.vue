<template>
  <div class="app-home">
    <div class="top-bar bg">
      <h1 class="lato-light" v-if="users">There are <b>{{users.length}}</b> Fellow Travelers in {{location}}</h1>
    <div class="flex user-filters">
      
    <v-text-field
    dark
    title="filter"
      v-model="filterByName"
      prepend-icon="search"
      color="blue lighten-2"
      label="Search by name"
      @input="setFilter"
    ></v-text-field>
    
    <router-link to="/filterTravelers">
      <v-icon color="white">filter_list</v-icon>
    </router-link>
    </div>
    </div>
    <user-preview v-if="users" :user="users[currUserIdx]" @nav="navUsers" @request="sendRequest"></user-preview>
    <users-map @goToUser="navToUser"></users-map>
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';
import UserSlider from '@/components/UserSlider.vue';
import ImageService from '@/services/ImageService.js';
import UsersMap from '@/components/UsersMap.vue';

export default {
  created() {
    this.$store.dispatch({ type: "loadUsers" });
  },

  data() {
    return {
      currUserIdx: 0,
      filterByName: null
    };
  },

  computed: {
    users() {
      const users = [...this.$store.getters.users];
      const idx = users.findIndex(user => user._id === this.$store.getters.loggedInUser._id);
      if (idx > -1) return users;
      else users.splice(idx,1);
      return users;
    },

    location() {
      return this.$store.getters.location.address;
    }
  },

  methods: {
    navUsers(diff) {
      if (
        (this.currUserIdx === 0 && diff < 0) ||
        (this.currUserIdx === this.users.length - 1 && diff > 0)
      )
        return;
      // if ((this.currUserIdx+diff === 0 && diff < 0) || (this.currUserIdx+diff === this.users.length-1 && diff > 0)
      // && (this.$store.getters.loggedInUser._id === this.users[this.currUserIdx+diff]._id)) return;
      if (
        this.$store.getters.loggedInUser._id ===
        this.users[this.currUserIdx + diff]._id
      )
        this.currUserIdx += diff;
      this.currUserIdx += diff;
    },

    setFilter() {
      this.$store.dispatch({
        type: "setFilterByName",
        filterByName: this.filterByName
      });
    },

    sendRequest(recipient) {
      let request = {
        createdAt: new Date().getTime(),
        location: this.$store.getters.location,
        sender: {
          userId: this.$store.getters.loggedInUser._id,
          name:
            this.$store.getters.loggedInUser.name.first +
            " " +
            this.$store.getters.loggedInUser.name.last
        },
        status: "pending",
        recipient: recipient,
        messages: []
      };

      this.$store.dispatch({ type: "sendRequest", request }).then(() => {
        console.log('request sent to', recipient);
        this.$noty.success(`request sent to ${recipient.name}`);
      });
    },

    navToUser(userId) {
      const idx = this.users.findIndex(user => user._id === userId);
      this.currUserIdx = idx;
    }
  },

  components: {
    UserPreview,
    UserSlider,
    UsersMap
  }
};
</script>

<style>

</style>
