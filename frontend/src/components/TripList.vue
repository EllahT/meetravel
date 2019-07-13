<template>
  <div>
     <v-flex>
    <trip-preview v-for="trip in trips" :trip="trip" :key="trip._id"></trip-preview>
    </v-flex>
  </div>
</template>

<script>
import TripPreview from "./TripPreview.vue";

export default {
  props: ["trips"],

  components: {
    TripPreview
  }
};
</script>
   