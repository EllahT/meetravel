<template>
    <div class="user-profile" v-if="user">
        <h1>User Profile</h1>
        <h4>{{user.name.first}} {{user.name.last}}</h4>
        <img :src="user.profileImg"/>

        <div class="details-body">
          <p>{{user.description}}</p>
          <h2>Bucket List:</h2>
          <ul>
            <li v-for="place in user.bucketList" :key="place">{{place}}</li>
          </ul>
          <h3>Prefered Travel Type: {{user.travelType}}</h3>
          <h3>Age: {{age}}</h3>
        </div>

        <div class="actions">
            <router-link to="/profile/edit">Edit General Info</router-link>
        </div>
    </div>
</template>

<script>
import UtilService from '@/services/UtilService.js';

export default {
    data() {
        return {
            user: null,
        }
    },

    created() {
        this.user = this.$store.getters.loggedInUser;
        
    },

    computed: {
        age() {
        return new Date().getFullYear() - this.user.birthDate;
        }
  }

}
</script>

<style lang="scss">
.user-profile {
    text-align: center;

    .details-body {
      margin: 20px;
      display: flex;
      flex-direction: column;

      ul {
        list-style: none;
      }
    }
    
    img {
      max-width: 200px;
      border-radius: 50%;
    }
}



</style>