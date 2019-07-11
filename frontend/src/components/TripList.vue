<template>
  <div>
      <ul>
          <trip-preview v-for="trip in trips" :trip="trip" :key="trip._id"></trip-preview>
      </ul>
  </div>
</template>

<script>
import TripPreview from './TripPreview.vue'

export default {
    props: ['trips'],
    
    components: {
        TripPreview
    }
}
</script>
 