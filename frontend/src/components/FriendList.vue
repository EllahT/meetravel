<template>
    <div>
      <nav class="inbox-nav">
        <router-link to="/inbox/friends" class="title-container"><p class="inbox-title">Friends</p></router-link> 
        <router-link to="/inbox/requests" class="sub-title-container"><p class="inbox-sub-title">Requests</p></router-link>
      </nav>
      <ul class="friends-list" v-if="friendships.length">
        <friend-preview v-for="friendship in friendships" :friendship="friendship" :key="(friendship || {})._id"></friend-preview>
      </ul>
    </div>
</template>

<script>
import FriendPreview from "@/components/FriendPreview.vue";

export default {
  
  created() {
    this.$store.dispatch({type: 'loadFriends'})
  },

  computed: {
      friendships() {
          return this.$store.getters.friends || [];
      }
  },

  components: {
    FriendPreview
  }
}
</script>
  
