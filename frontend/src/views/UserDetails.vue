<template>
  <div class="user-details" v-if="user">
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
          <h5>location: {{distance}} km away</h5> 
        </div>
      <div class="actions">
        <v-btn @click="sendRequest">Send a request</v-btn>
      </div>


    </div>
</template>

<script>
import UtilService from '@/services/UtilService.js';

export default {
   data() {
      return {
          user: null
      }
  },
  created() {
      const userId = this.$route.params.userId;      
      this.$store.dispatch({type: 'loadUserById', userId})
      .then ((user) => {
        if (user) this.user = JSON.parse(JSON.stringify(user));
        else this.$router.push('/user');
      })
  },

  computed: {
    distance() {
      return UtilService.calulateDistance(this.$store.getters.location, this.user.location);
    },

    age() {
      return new Date().getFullYear() - this.user.birthDate;
    }
  },

  methods: {
    sendRequest() {
      this.$store.dispatch({type: 'sendRequest', user: this.user._id})
      this.$router.push('/user');
      }
  },
}
</script>

<style lang="scss">
  
  .user-details {
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
    }
  }
</style>

