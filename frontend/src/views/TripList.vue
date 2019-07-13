<template>
  <div>
     <v-flex>
    <trip-preview v-for="trip in tripsToShow" :trip="trip" :key="trip._id"></trip-preview>
    </v-flex>
  </div>
</template>

<script>
import TripPreview from "@/components/TripPreview.vue";
import {mapGetters, mapActions} from 'vuex';

export default {

  methods: {
    ...mapActions(["loadTrips"]),
  },

  computed: {
    ...mapGetters(["trips"]),
    
    tripsToShow() {
      return this.trips;
    }
  },

  created() {
    this.loadTrips();
  },

  components: {
    TripPreview
  }
};
</script>
   