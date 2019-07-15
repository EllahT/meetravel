<template>
     <ul v-if="friends">
        <friend-preview v-for="friend in friends" :friend="friend" :key="friend._id"></friend-preview>
    </ul>
</template>

<script>
import FriendPreview from "@/components/FriendPreview.vue";

export default {
  created() {
    this.$store.dispatch({type: 'loadFriends'});
  },

  computed: {
      friends() {
          return this.$store.getters.friends;
      }
  },

  components: {
    FriendPreview
  }
}
</script>
   