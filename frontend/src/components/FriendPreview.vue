<template>
  <li class="friend-preview" v-if="friendship">
    <h4>You and <router-link :to="friendUrl">{{friendName}}</router-link></h4>
    <img :src="friendImg"/>
    <h5>friends since :{{time}}</h5>
    <router-link :to="detailsUrl">talk and set a trip together!</router-link>
  </li>
</template>

<script>

import moment from 'moment'

export default {
  props: {
      friendship: {
          type: Object,
          require: true
      }
  },

  computed: {
    detailsUrl() {
      return `/inbox/friends/${this.friendship._id}`
    },

    friendImg() {
      const friendId = (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
          this.friendship.resipient.userId :
          this.friendship.sender.userId ;
      let friend = (this.$store.getters.userById(friendId));
      if (friend) {
        return friend.profileImg;
      } else {
        (this.$store.dispatch({type: 'loadUserById', userId: friendId}))
        .then(friend => {
            return friend.profileImg;
        })
      }
    },

    time() {
      return moment(this.friendship.createdAt).fromNow();
    },

    friendName() {
      return (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
      this.friendship.resipient.name :
      this.friendship.sender.name ;
    },

    friendUrl() {
      const url = (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
      this.friendship.resipient.userId :
      this.friendship.sender.userId ;
      return `/user/${url}`
    },
  },
}



</script>

<style lang="scss">
.friend-preview {
    max-width: 650px;
    margin-top:5px;
    padding: 5px;
    border-width:1px;
    border-style: solid;
    border-color: blue;
    border-width: 1px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 200px;
      border-radius: 50%;
    }
}
</style>




