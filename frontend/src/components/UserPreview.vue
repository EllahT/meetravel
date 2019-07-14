<template>
  <li class="user-preview" v-if="user" :class="isAdminPageClass">
    <button  v-if="!isAdminPage" @click="emitNavUsers(-1)"><v-icon>keyboard_arrow_left</v-icon></button>
    <div class="details-container">
      <router-link :to="detailsUrl">
        <h4>{{fullName}}</h4>
        <img :src="user.profileImg"/>
        <h5>location: {{user.currLocation}}</h5> 
      </router-link> 
      <div v-if="isAdminPage" class="actions">
        <router-link :to="editUrl">Edit</router-link> |
        <button @click="emitDelete" title="delete user">x</button>
      </div>
        <v-btn v-if="!isAdminPage" @click="emitRequest">Send a request</v-btn>
    </div>
    <button  v-if="!isAdminPage" @click="emitNavUsers(1)"><v-icon>keyboard_arrow_right</v-icon></button>
  </li>
</template>

<script>
import GecoodeService from '@/services/GeocodeService.js';

export default {
  props: {
      user: {
          type: Object,
          require: true
      },

      type: {
        type: String,
        require: false
      }
  },

  computed: {
    detailsUrl() {
      return `/user/${this.user._id}`;
    },

    editUrl() {
      return `/profile/edit`;
    },

    fullName(){
      return this.user.firstName + ' ' + this.user.lastName
    },

    isAdminPage() {
      return this.type === 'admin';
    },

    isAdminPageClass() {
      return (this.type === 'admin')? 'admin' : '';
    }
  },

  methods: {
    emitDelete(){
      this.$parent.$emit('delete-user', this.user._id)
    },

    emitRequest() {
      this.$emit('request', this.user._id);
    },

    emitNavUsers(diff) {
      this.$emit('nav', diff);
    }

  }
}

</script>

<style lang="scss">
.user-preview {
    max-width: 650px;
    margin-top:5px;
    padding: 5px;
    border: none;
    display: flex;

    h4, h5, img {
      margin-bottom: 20px;
    }

    .details-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    button {
      outline: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
}

.user-preview.admin {
    border-width:1px;
    border-style: solid;
    border-color: blue;
    border-width: 1px;
    border-radius: 20px;
}

</style>
