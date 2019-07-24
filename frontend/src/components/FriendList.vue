<template>
    <div>
      <nav class="inbox-nav">
        <router-link to="/inbox/friends" class="title-container"><p class="inbox-title">Friends</p></router-link> 
        <router-link to="/inbox/requests" class="sub-title-container"><p class="inbox-sub-title">Requests</p></router-link>
      </nav>
      <ul class="friends-list" v-if="friendships.length">
        <friend-preview v-for="friendship in friendships" :friendship="friendship" :key="(friendship || {})._id" @showChat="openChat"></friend-preview>
      </ul>
      <chat-room v-if="showChat" :chatInfo="chatInfo" @close="closeChat">
    </chat-room>
    </div>
</template>

<script>
import FriendPreview from '@/components/FriendPreview.vue';
import ChatRoom from '@/components/ChatRoom.vue';

export default {
  data() {
    return {
      showChat: false,
      chatInfo: null
    }
  },

  created() {
    this.$store.dispatch({type: 'loadFriends'})
  },

  computed: {
      friendships() {
          return this.$store.getters.friends || [];
      }
  },

  methods: {
    openChat(chatInfo) {
      if (this.showChat) {
        this.showChat = false
        setTimeout(()=> {
          this.showChat = true;
          this.chatInfo = chatInfo;
        }, 2);
      } else {
        this.showChat = true;
        this.chatInfo = chatInfo;
      }
    },

    closeChat() {
      this.showChat = false;
      this.chatInfo = null;
    }
  },

  components: {
    FriendPreview,
    ChatRoom
  }
}
</script>

<style>
.inbox-nav{
margin-left: 20px;
}
</style>
  
