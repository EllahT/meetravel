<template>
  <li class="user-preview">
    <h1>i'm user preview</h1>
      <h1>{{user.name}}</h1>
      <img :src="user.imgSrc"/>
      <h4>user location</h4>
      <div class="actions">
        <button @click="emitLikeUser(user._id)">Like/Message</button>
        <router-link :to="detailsUrl">Details</router-link>
      </div>
  </li>
</template>

<script>

export default {
  props: {
      user: {
          type: Object,
          require: true
      }
  },

  computed: {
    detailsUrl() {
      return `/user/${this.user._id}`;
    }
  },

  methods: {
    emitLikeUSer(userId) {
      this.$emit('liked', userId);
    }
  }
};
</script>
