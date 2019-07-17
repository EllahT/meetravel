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

      sendRequest(resipient) {
        ImageService.getRandomImg('friendship')
        .then((imgSrc => {
            let request = {
                  members : [this.$store.getters.loggedInUser._id, resipient.userId],
                  createdAt : new Date().getTime(),
                  location: this.$store.getters.location,
                  friendShipImg: imgSrc,
                  sender: {userId: this.$store.getters.loggedInUser._id, name: this.$store.getters.loggedInUser.name.first + ' ' + this.$store.getters.loggedInUser.name.last},
                  status : 'pending',
                  resipient: resipient
          }
        
          this.$store.dispatch({type: 'sendRequest', request})
          .then(() => {
            console.log('request sent to', resipient);
          })
        }))
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
