<template>
<div>
  <li class="friend-preview" v-if="friendship">
    <router-link :to="friendUrl" title="Show profile"><img v-if="friendImg" :src="friendImg"/></router-link>
    <h3>{{friendName}}</h3>
    <h4>Friends since {{time}}</h4>
    <button @click="emitShowChat" title="Open chat" class="chat-icon"><i class="material-icons">chat</i></button>
  </li>
</div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
      friendship: {
          type: Object,
          require: true
      }
  },

  data() {
    return {
      showChat: false,
    }
  },

  computed: {
    detailsUrl() {
      return `/inbox/friends/${this.friendship._id}`;
    },

    friendImg() {
      const friendId = (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))
        ? this.friendship.recipient.userId 
        : this.friendship.sender.userId ;
      let friend = this.$store.getters.userById(friendId);
      return (friend)? friend.profileImg : null;
    },

    time() {
      return moment(this.friendship.createdAt).format('MMM, YYYY');
    },

    friendName() {
      return (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
      this.friendship.recipient.name :
      this.friendship.sender.name ;
    },

    friendUrl() {
      const url = (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
      this.friendship.recipient.userId :
      this.friendship.sender.userId ;
      return `/user/${url}`
    },
  },

  methods: {
    emitShowChat() {
      this.$emit('showChat', {friendshipId: this.friendship._id, history: this.friendship.messages ,friendImg: this.friendImg, friendName: this.friendName});
    }
  }
}

</script>

<style lang="scss">
.friend-preview {
    max-width: calc(100% - 420px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid transparent;
    color: #6f7069;

    img {
      max-width: 200px;
      border-radius: 50%;
      margin: 10px;
    }

    a {
      color: inherit;
    }

    button {
      outline: none;  
    }
}

.friend-preview:hover {
      border-top: 1px solid #9a9b94;
      border-bottom: 1px solid #9a9b94;
      .chat-icon
      {
      color: #2868f3;
      }
    }
</style>




