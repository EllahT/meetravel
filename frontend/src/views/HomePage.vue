<template>
  <section class="homepage lato-light">
    <div class="container">
      <h1 class="logo">Mee<span class="Lato-bold">Travel</span>
      </h1>
      <h4 class>Meet people. Have an adventure.</h4>
      <div class="app-presenting">
        <p>On your own in a stange land?</p>
        <p>Connect with nearby travelers.</p>
      </div>
    </div>
    <section class="locations-container Lato-bold">
      <h4>TOP LOCATIONS:</h4>
      <button class="btn small flat" @click="setLocation(32.109333, 34.855499)">Tel Aviv</button>
      <button class="btn small flat"  @click="setLocation(35.652832, 139.839478)">Tokyo</button>
      <button class="btn small flat" @click="setLocation(40.73061, -73.935242)">New York</button>

      <h4>OR</h4>
      <div class="btn primary-dark shiny" @click="getUserLocation">
        <v-icon color="white" class="px-1">location_on</v-icon>Get My Location
        <span class="shiny"></span>
      </div>
    </section>
  </section>
</template>
<script>
import GeocodeService from "../services/GeocodeService.js";

export default {
  name: "home",

  created() {
    this.$emit("homepage", false);
  },



  data() {
    return {
      location: { lat: null, lng: null } ,
      address: null,
    };
  },

  computed: {
    isAddress() {
      return this.address === null;
    }
  },

  methods: {
    changedLoggedUser() {
      this.$store
        .dispatch({
          type: "login",
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.username = "";
          this.password = "";
        });
    },

    getUserLocation() {
      GeocodeService.getcoordsition().then(loc => {
        console.log(loc);
        this.location.lat = loc.coords.lat;
        this.location.lng = loc.coords.lng;
       // this.goToUsers();
      });
    },
    setLocation(lat, lng) {
      this.location.lat = lat;
      this.location.lng = lng;
      this.goToUsers();
    },
    goToUsers() {
      this.$store.dispatch({type: 'updateLocation', location: this.location})
      this.$router.push("/user");
    }
  },

  destroyed() {
    this.$emit("homepage", true);
  }
};
</script>

<style >
</style>

