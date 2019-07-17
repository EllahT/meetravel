<template>
     <ul v-if="friendships.length">
        <friend-preview v-for="friendship in friendships" :friendship="friendship" :key="friendship._id"></friend-preview>
    </ul>
</template>

<script>
import FriendPreview from "@/components/FriendPreview.vue";

export default {
  
  created() {
    this.$store.dispatch({type: 'loadFriends'})
  },

  computed: {
      friendships() {
          return this.$store.getters.friends;
      }
  },

  components: {
    FriendPreview
  }
}
</script>
   