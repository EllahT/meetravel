<template>
  <div>
    <nav class="inbox-nav">
      <router-link to="/inbox/friends" class="sub-title-container"><p class="inbox-sub-title">Friends</p></router-link> 
      <router-link to="/inbox/requests" class="title-container"><p class="inbox-title">Requests</p></router-link>
    </nav>
    <ul class="requests-list" v-if="requests">
        <request-preview v-for="request in requests" :request="request" :key="(request || {})._id"></request-preview>
    </ul>
  </div>
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
   