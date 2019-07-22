<template>
  <div class="app-home">
    <div class="top-bar bg"> 
      <h1 class="lato-light" v-if="users">
        Found
        <b>{{users.length}}</b>
        Fellow Travelers!
      </h1>
      <h4>
        <v-icon size="18">location_on</v-icon>
        Location: 
        {{location}}
      </h4>
      <!-- <div class="flex user-filters">
        <v-text-field
          dark
          title="filter"
          v-model="filterByName"
          prepend-icon="search"
          color="blue lighten-2"
          label="Search by name"
          @input="setFilter"
        ></v-text-field>
</div> -->
        <!-- <router-link to="/filterTravelers">
      <v-icon color="white">filter_list</v-icon>
        </router-link>-->
      
    </div>
    <h3 class="lato-light" v-if="users">
      <!-- <b>{{currUserIdx+1}}/{{users.length}}</b> -->
    </h3>

    <div class="flex user-gallery">
      <img v-if="currMin" :src="currMin.profileImg" @click="navUsers(-1)"/>
      <user-preview v-if="users" :user="users[currUserIdx]" @nav="navUsers" @request="sendRequest"></user-preview>
      <img v-if="currMax" :src="currMax.profileImg" @click="navUsers(1)"/>
    </div>
    <div class="flex map-filter">
      <user-filter></user-filter>
      <users-map @goToUser="navToUser"></users-map>
    </div>
  </div>
</template>

<script>
import UserPreview from "@/components/UserPreview.vue";
import UserSlider from "@/components/UserSlider.vue";
import ImageService from "@/services/ImageService.js";
import UsersMap from "@/components/UsersMap.vue";
import UserFilter from "@/views/UserFilter.vue";

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
      const idx = users.findIndex(
        user => user._id === this.$store.getters.loggedInUser._id
      );
      if (idx > -1) return users;
      else users.splice(idx, 1);
      return users;
    },

    currMin() {
      if (!this.users) return;
      if (this.currUserIdx === 0) return this.users[this.users.length - 1];
      return this.users[this.currUserIdx - 1];
    },

    currMax() {
      if (!this.users) return;
      if (this.currUserIdx === this.users.length - 1) return this.users[0];
      return this.users[this.currUserIdx + 1];
    },

    location() {
      return this.$store.getters.location.address;
    }
  },

  methods: {
    navUsers(diff) {
      if (this.currUserIdx === 0 && diff < 0)
        this.currUserIdx = this.users.length - 1;
      if (this.currUserIdx === this.users.length - 1 && diff > 0)
        this.currUserIdx = 0;
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
        console.log("request sent to", recipient);
        this.$noty.success(`Request sent to ${recipient.name}`);
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
    UsersMap,
    UserFilter
  }
};
</script>

<style>
</style>
