<template>
<div >
  <li class="user-preview">
    <!-- <h1>I'm user preview</h1> -->
      <h4>{{fullName}}</h4>
      <img :src="user.profileImg"/>
      <h5>location: {{user.currLocation}}</h5> |
      <div class="actions">
        <button @click="emitLikeUser(user._id)"> Like/Message </button> |
        <router-link :to="detailsUrl">Details</router-link> |
        <button @click="emitDelete" title="delete user">x</button> |
      </div>
  </li>
  </div>
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
    },
    fullName(){
      return this.user.firstName + this.user.lastName
    }
  },

  methods: {
    emitLikeUSer(userId) {
      this.$emit('liked', userId);
    },
    emitDelete(){
      this.$parent.$emit('delete-user', this.user._id)
    }
  }
}

</script>

<style >
.user-preview {
    max-width: 600px;
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
}
</style>
