<template>
<section class="homepage lato-light">
    <div class="container">
      <h1 class="logo sensations ">
        MeeTravel
      </h1>
      <h4 class>Meet people. Have an adventure.</h4>
      <v-flex class="app-presenting hidden-xs-only fadeIn" >
        <p>Meet travelers anytime, anywhere.</p>
      </v-flex >
    </div>
    <section class="locations-container ">
     
      <v-select 
   
      color="blue"
        class="select"
        :items="items"
        v-model="selectedLocation"
        label="Select a location"
        single-line
        hint="Select a location"
        item-text="address"
        item-value="location"
        return-object
        autocomplete
      ></v-select>
      <h4>OR</h4>
      <div class="btn primary-dark shiny" @click="getUserLocation">
        <v-icon color="white" class="px-1">location_on</v-icon>Get my location
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
      location: { lat: null, lng: null, address: null },
      selectedLocation: { address: null, coords: { lat: null, lng: null } },
       items: [
        { address: 'Tel Aviv, Israel', coords: { lat: 32.109333, lng: 34.855499 } },
        { address: 'Tokyo, Japan', coords: { lat: 35.652832, lng: 139.839478 } },
        { address: 'NYC, New York', coords: { lat: 40.730610, lng: -73.935242 } },
        { address: 'Bangkok, Thailand', coords: { lat:13.756331 , lng:100.501762  } },
        { address: 'San Sebastián, Spain', coords: { lat:43.320900 , lng:-1.984520  } },
        { address: 'Dubai, United Arab Emirates', coords: { lat:25.204849 , lng:55.270782  } },
        { address: 'London, United Kingdom', coords: { lat:51.507351 , lng:-0.127758  } },
        { address: 'Paris, France', coords: { lat:48.856613 , lng:2.352222  } },
        { address: 'Honolulu, Hawaii', coords: { lat:21.306944 , lng:-157.858337  } },
        { address: 'Singapore , Southeast Asia', coords: { lat:1.352083 , lng:103.819839  } },
        { address: 'Mumbai, India', coords: { lat: 19.009809, lng: 72.866287  } },
        { address: 'Athens, Greece', coords: { lat:37.983810 , lng:23.727539  } },
        { address: 'Istanbul, Turkey', coords: { lat:41.008240 , lng:28.978359 } },
        { address: 'Seoul, South Korea', coords: { lat:37.566536 , lng:126.977966  } },
        { address: 'Chicago, Illinois', coords: { lat:41.878113 , lng: -87.629799 } },
        { address: 'Las Vegas, Nevada', coords: { lat: 36.169941, lng: -115.139832 } },
        { address: 'San Francisco, California', coords: { lat:37.774929 , lng:-122.419418  } },
        { address: 'Washington, D.C.', coords: { lat:38.907192 , lng:-77.036873  } },
        { address: 'San Francisco, California', coords: { lat:29.951065 , lng:-90.071533  } },
        { address: 'Orlando, Florida', coords: { lat:28.538336 , lng:-81.379234  } },
        { address: 'Oslo, Norway', coords: { lat:59.913868 , lng:10.752245  } },
        { address: 'Rome, Italy', coords: { lat:41.902782 , lng:12.496365  } },
        { address: 'Zurich, Switzerland', coords: { lat:47.369019 , lng:8.538030  } },
      ]
    };
  },

  computed: {
    isAddress() {
      return this.address === null;
    }
  },

  methods: {
    getUserLocation() {
      GeocodeService.getPosition().then(loc => {
        this.location.lat = loc.coords.latitude;
        this.location.lng = loc.coords.longitude;
        GeocodeService.getCityByLatLng(
          this.location.lat,
          this.location.lng
        ).then(address => {
          this.location.address = address;
          this.goToUsers();
        });
      });
    },

    setLocation(lat, lng, address) {
      this.location.lat = lat;
      this.location.lng = lng;
      this.location.address = address;
      this.goToUsers();
    },

    goToUsers() {
      this.$store.dispatch({ type: "updateLocation", location: this.location });
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

