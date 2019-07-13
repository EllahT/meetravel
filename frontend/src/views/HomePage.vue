<template>
  <v-flex class="homepage">
      <h1>MeeTravel</h1>
      <h4 class="pb-4">Meet people. Have an adventure.</h4>
      <p>On your own in a stange land?</p>
      <p>Connect with nearby travelers</p>

      <div class="locations">
        <v-btn @click="getUserLocation"><v-icon left>location_on</v-icon> My Location</v-btn>
        <p>Search other Location</p>
        <input type="text" v-model="address" @input="searchLoc"/>
        {{location}}
      </div>
      <v-btn @click="goToUsers">Get Started</v-btn>
  </v-flex>
</template>

<script>
import GeocodeService from '@/services/GeocodeService';

export default {
  name: 'home',

  created() {
    this.$emit('homepage', true);
  },
  
  data() {
    return {
      location: {lat: null, lng: null},
      address: null

    }
  },

  methods: {
    changedLoggedUser() {
      this.$store.dispatch({type: 'login', username: this.username, password: this.password})
      .then(() => {
        this.username = '';
        this.password = '';
      })
    },

    searchLoc() {
        GeocodeService.getLatLngByAddress(this.address)
        .then((location) => {
          this.location = location;
        })
      },

      getUserLocation() {
        GeocodeService.getPosition()
        .then((loc) => {
          this.location.lat = loc.coords.latitude;
          this.location.lng = loc.coords.longitude;
        })
      },

      goToUsers() {
        this.$router.push('/users');
      }
  },

  destroyed() {
    this.$emit('homepage', false);
  }
};
</script>

<style>
  input {
    border: 1px solid black;
  }

  .homepage {
    text-align: center;
    background-image: url('../../public/img/background.jpg');
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100vh;
  }
</style>

