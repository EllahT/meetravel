<template>
  <section class="homepage lato-light">
    <div class="container">
      <h1 class="logo">
        Mee
        <span class="Lato-bold">Travel</span>
      </h1>
      <h4 class>Meet people. Have an adventure.</h4>
      <div class="app-presenting">
        <p>On your own in a stange land?</p>
        <p>Connect with nearby travelers.</p>
      </div>
    </div>
    <section class="locations-container Lato-bold">
      
      <v-select
        class="select"
        @change="goToUsers"
        :items="items"
        v-model="location"
        label="Top Locations"
        single-line
        hint="Most Popular"
        item-text="city"
        item-value="location"
        return-object
        autocomplete
      ></v-select>
      <h4>OR</h4>
      <div class="btn primary-dark shiny" @click.native="getUserLocation">
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

  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      console.log(ac);
      this.location.coords.lat = place.geometry.location.lat();
      this.location.coords.lng = place.geometry.location.lng();
      this.address = ac[0]["short_name"] + ", " + ac[2]["long_name"];
    });
  },

  data() {
    return {
      location: { city: "", coords: { lat: null, lng: null } },
      address: null,
      autocomplete: null,
      items: [
        { city: "Tel Aviv", coords: { lat: 32.109333, lng: 34.855499 } },
        { city: "Tokyo", coords: { lat: 35.652832, lng: 139.839478 } },
        { city: "New York", coords: { lat: 40.73061, lng: -73.935242 } }
      ]
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
        this.location.coords = loc.coords;
        this.goToUsers();
      });
    },
    setLocation() {},
    goToUsers() {
      this.$router.push("/users");
    }
  },

  destroyed() {
    this.$emit("homepage", true);
  }
};
</script>

<style >
</style>

