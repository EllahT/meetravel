<template>
  <v-flex class="homepage">
      <h1>MeeTravel</h1>
      <h4 class="pb-4">Meet people. Have an adventure.</h4>
      <p>On your own in a stange land?</p>
      <p>Connect with nearby travelers</p>

      <div class="locations">
        <v-btn @click="getUserLocation"><v-icon left>location_on</v-icon> My Location</v-btn>
        <p>Search other Location</p>
        <input ref="autocomplete"
        placeholder="Search" 
        onfocus="value = ''" 
        type="text" />
      </div>
      <v-btn @click="goToUsers" :disabled="isAddress">Get Started</v-btn>
      <div>
        <h1>Top Locations: </h1>
        <v-btn @click="setLocation('newyork')">New York</v-btn>
        <v-btn @click="setLocation('tokyo')">Tokyo</v-btn>
        <v-btn @click="setLocation('telaviv')">Tel Aviv</v-btn>
      </div>
  </v-flex>
</template>

<script>
import GeocodeService from '@/services/GeocodeService';

export default {
  name: 'home',

  created() {
    this.$emit('homepage', false);
  },

  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );
    
    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      this.location.lat = place.geometry.location.lat();
      this.location.lng = place.geometry.location.lng();
      this.address = ac[0]["short_name"] +', '+ ac[2]["long_name"];
    })
  },
  
  data() {
    return {
      location: {lat: null, lng: null},
      address: null,
      autocomplete: null
    }
  },

  computed: {
    isAddress() {
      return (this.address === null);
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

    getUserLocation() {
        GeocodeService.getPosition()
        .then((loc) => {
          this.location.lat = loc.coords.latitude;
          this.location.lng = loc.coords.longitude;
          GeocodeService.getCityByLatLng(this.location.lat, this.location.lng)
          .then((address) => {
          this.address = address;
          this.goToUsers();
        })
        })
      },

    goToUsers() {
        this.$store.dispatch({type: 'updateCurrLocation', location: {lat: this.location.lat, lng: this.location.lng, address: this.address}});
        this.$router.push('/user');
    },

    setLocation(value) {
      switch (value) {
        case 'newyork': {
          this.location = {lat: 40.7128 ,lng:  -74.0060};
          this.address = 'New York, USA';
          this.goToUsers();
          break;
        }
        case 'tokyo': {
          this.location = {lat: 35.6804 ,lng:  139.7690};
          this.address = 'Tokyo, Japan';
          this.goToUsers();
          break;
        }
        case 'telaviv': {
          this.location = {lat: 32.0853 ,lng:  34.7818};
          this.address = 'Tel Aviv, Israel';
          this.goToUsers();
          break;
        }
      
      }
    }
  },

  destroyed() {
    this.$emit('homepage', true);
  }
};
</script>

<style lang="scss">
  .homepage {
    text-align: center;
    background-image: url('../../public/img/background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    input {
    border: 1px solid black;
    }
  }

  .pac-container {
    span {
      text-shadow: none;
      background-color: transparent;
    }

    span::after {
      background-color: transparent;
    }

    span::before {
      background-color: transparent;
    }
  }
</style>

