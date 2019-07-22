<template>
  <section class="lato-light homepage">
    <background-gallery></background-gallery>
    <div class="main-container flex column">
      <div>
        <h1 class="logo sensations">MeeTravel</h1>
        <h4 class>Meet people. Have an adventure.</h4>
      </div>

      <div class="app-presenting flex column">
        <p>Traveling?</p>
        <p>Connect with travelers nearby</p>
      </div>
      <section class="location-container flex column">
        <span>Find travelers in your current location</span>
        <div class="btn primary-dark" @click="getUserLocation">
          <v-icon color="white" class="px-1">location_on</v-icon>Enable location
          <span class="shiny"></span>
        </div>
      </section>
    </div>
    
    <div class="flex column secondery-container">
      <h1 class="">Find travelers</h1>
        <span class="">Search for travelers in a chosen location</span>
      <div class="flex column bg">
        <div class="flex select">
          <v-autocomplete
            class="input"
            full-width
            clearable
            :items="items"
            v-model="selectedLocation"
            label="Search location"
            hint="Select a location"
            item-text="address"
            item-value="location"
            return-object
            autocomplete
            @input="setLocation(selectedLocation)"
          ></v-autocomplete>

          <button class="btn flex">
            <v-icon left color="white">search</v-icon>
          </button>
          <!-- <button dark class="btn primary-dark"><v-icon dark >send</v-icon>Search</button> -->
        </div>
      </div>

      <!-- <div class="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8745488.946747249!2d146.31465659135952!3d-29.679446207610866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2z15DXldeh15jXqNec15nXlA!5e0!3m2!1siw!2sil!4v1563661210201!5m2!1siw!2sil"
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>-->
    </div>
    <cards-3D @setLocation="setLocation"></cards-3D>
  </section>
</template>
<script>
import GeocodeService from "../services/GeocodeService.js";
import backgroundGallery from "../components/backgroundGallery";
import Cards3D from "../components/Cards3D";

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
        {
          address: "Tel Aviv, Israel",
          coords: { lat: 32.109333, lng: 34.855499 }
        },
        {
          address: "Tokyo, Japan",
          coords: { lat: 35.652832, lng: 139.839478 }
        },
        {
          address: "NYC, New York",
          coords: { lat: 40.73061, lng: -73.935242 }
        },
        {
          address: "Bangkok, Thailand",
          coords: { lat: 13.756331, lng: 100.501762 }
        },
        {
          address: "San Sebastián, Spain",
          coords: { lat: 43.3209, lng: -1.98452 }
        },
        {
          address: "Dubai, United Arab Emirates",
          coords: { lat: 25.204849, lng: 55.270782 }
        },
        {
          address: "London, United Kingdom",
          coords: { lat: 51.507351, lng: -0.127758 }
        },
        { address: "Paris, France", coords: { lat: 48.856613, lng: 2.352222 } },
        {
          address: "Honolulu, Hawaii",
          coords: { lat: 21.306944, lng: -157.858337 }
        },
        {
          address: "Singapore , Southeast Asia",
          coords: { lat: 1.352083, lng: 103.819839 }
        },
        {
          address: "Mumbai, India",
          coords: { lat: 19.009809, lng: 72.866287 }
        },
        {
          address: "Athens, Greece",
          coords: { lat: 37.98381, lng: 23.727539 }
        },
        {
          address: "Istanbul, Turkey",
          coords: { lat: 41.00824, lng: 28.978359 }
        },
        {
          address: "Seoul, South Korea",
          coords: { lat: 37.566536, lng: 126.977966 }
        },
        {
          address: "Chicago, Illinois",
          coords: { lat: 41.878113, lng: -87.629799 }
        },
        {
          address: "Las Vegas, Nevada",
          coords: { lat: 36.169941, lng: -115.139832 }
        },
        {
          address: "San Francisco, California",
          coords: { lat: 37.774929, lng: -122.419418 }
        },
        {
          address: "Washington, D.C.",
          coords: { lat: 38.907192, lng: -77.036873 }
        },
        {
          address: "San Francisco, California",
          coords: { lat: 29.951065, lng: -90.071533 }
        },
        {
          address: "Orlando, Florida",
          coords: { lat: 28.538336, lng: -81.379234 }
        },
        { 
          address: "Oslo, Norway", 
          coords: { lat: 59.913868, lng: 10.752245 } 
        },
        { 
          address: "Rome, Italy", 
          coords: { lat: 41.902782, lng: 12.496365 } 
        },
        {
          address: "Zurich, Switzerland",
          coords: { lat: 47.369019, lng: 8.53803 }
        }
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

    setLocation({coords, address}) {
      this.location.lat = coords.lat;
      this.location.lng = coords.lng;
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
  },
  components: {
    backgroundGallery,
    Cards3D
  }
};
</script>



