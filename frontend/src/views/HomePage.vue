<template>
  <div class="homepage">
      <button @click="getUserLocation">Use My Location</button>
      <h1>Search othen Location</h1>
      <input type="text" v-model="address" @input="searchLoc"/>
      {{location}}
  </div>
</template>

<script>
import GeocodeService from '@/services/GeocodeService';

export default {
  name: 'home',
  
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
      }
  }
};
</script>

<style>
  input {
    border: 1px solid black;
  }
</style>

