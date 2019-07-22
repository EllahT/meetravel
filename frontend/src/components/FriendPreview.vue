<template>
<div>
  <li class="friend-preview" v-if="friendship">
    <router-link :to="friendUrl"><img v-if="friendImg" :src="friendImg"/></router-link>
    <h4>{{friendName}}</h4>
    <h5>friends since {{time}}</h5>
    <button @click="toggleShowChat"><i class="material-icons">chat</i></button>
    <chat-room v-if="showChat && friendship" :friendshipId="friendship._id" :history="friendship.messages" :friendImg="friendImg" :friendName="friendName" @close="toggleShowChat">
      <div></div>
    </chat-room>
  </li>
</div>
</template>

<script>
import ChatRoom from '@/components/ChatRoom.vue';
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
      return moment(this.friendship.createdAt).fromNow();
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
    toggleShowChat() {
      this.showChat = !this.showChat;
    }
  },

  components: {
    ChatRoom
  }
}

</script>

<style lang="scss">
.friend-preview {
    max-width: 400px;
    margin-top:5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 10px 8px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    color: #9a9b94;

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
      color: #52524e;
      cursor: pointer;
    }
</style>




