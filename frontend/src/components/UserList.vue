<template>
  <div>
      <ul class="users-list">
          <h3>Users list:</h3>
          <user-preview v-for="user in users" :type="type"
          :user="user" :key="user._id"></user-preview>
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
      },

      type: {
          type: String,
          require: false
      }
  },

  components: {
      UserPreview
  }
};
</script>

<style>
.users-list {
    padding-top: 20px;
    border: none;
}
    
</style>