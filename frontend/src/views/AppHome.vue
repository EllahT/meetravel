<template>
  <div class="app-home">
      <div class="top-bar">
        <h1 v-if="users">There are {{users.length}} Fellow Travelers in {{location}}</h1>
      </div>
        <input type="text" placeholder="Search travelers by name" v-model="filterByName" @input="setFilter"/>
        <router-link to="/filterTravelers">Set Filters</router-link>
      
      <user-preview  v-if="users" :user="users[currUserIdx]" @nav="navUsers" @request="sendRequest"></user-preview>
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';
import ImageService from '@/services/ImageService.js';

export default {
  created() {
    this.$store.dispatch({type: 'loadUsers'})
    .then(() => {
      if (this.$store.getters.loggedInUser._id === this.users[this.currUserIdx]._id) this.currUserIdx++;
    })
    
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

      location() {
        return this.$store.getters.location.address;
      }
  },

  methods: {
      navUsers(diff) {
        if ((this.currUserIdx === 0 && diff < 0) || (this.currUserIdx === this.users.length-1 && diff > 0)) return;
        // if ((this.currUserIdx+diff === 0 && diff < 0) || (this.currUserIdx+diff === this.users.length-1 && diff > 0) 
        // && (this.$store.getters.loggedInUser._id === this.users[this.currUserIdx+diff]._id)) return;
        if (this.$store.getters.loggedInUser._id === this.users[this.currUserIdx+diff]._id) this.currUserIdx+=diff;
        this.currUserIdx += diff;
      },

      setFilter() {
        this.$store.dispatch({type: 'setFilterByName', filterByName: this.filterByName});
      },

      sendRequest(recipient) {
          let request = {
            createdAt : new Date().getTime(),
            location: this.$store.getters.location,
            sender: {userId: this.$store.getters.loggedInUser._id, name: this.$store.getters.loggedInUser.name.first + ' ' + this.$store.getters.loggedInUser.name.last},
            status : 'pending',
            recipient: recipient,
            messages: []
          }
        
          this.$store.dispatch({type: 'sendRequest', request})
          .then(() => {
            console.log('request sent to', recipient);
          })
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
