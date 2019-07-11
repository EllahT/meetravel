<template>
  <div>
      <ul>
          <user-preview v-for="user in users" 
          :user="user" :key="user._id" @liked="addLike"></user-preview>
      </ul>
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';

export default {
  props: {
      users: {
          type: Array,
          require: true
      }
  },

  methods: {
      addLike(userId) {
          this.$store.dispatch({type: 'likeUser', userId})
      }
  },

  components: {
      UserPreview
  }
};
</script>