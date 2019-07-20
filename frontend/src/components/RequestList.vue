<template>
     <ul v-if="requests">
        <request-preview v-for="request in requests" :request="request" :key="(request || {})._id"></request-preview>
    </ul>
</template>

<script>
import RequestPreview from "@/components/RequestPreview.vue";

export default {
  created() {
    this.$store.dispatch({type: 'loadRequests'})
  },

  computed: {
      requests() {
          return this.$store.getters.requests || [];
      }
  },

  components: {
    RequestPreview
  }
}
</script>
   