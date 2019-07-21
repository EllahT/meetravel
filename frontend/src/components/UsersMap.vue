<template>
    <GmapMap
        :center="userPosition"
        :zoom="11"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
    >
        <GmapMarker
            :position="userPosition"
            :clickable="true"
            :draggable="false"
            :title="'me'"
        />
        <GmapMarker
            v-for="(user, index) in users"
            :key="index"
            :position="user.location"
            :clickable="true"
            :draggable="false"
            :title="user.name.first + ' ' + user.name.last"
            :icon="'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'"
            @click="goToUser(user._id)"
        />
    </GmapMap>
</template>
<script>
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  computed: {
    users() {
        return this.$store.getters.users;
    },

    userPosition() {
        return this.$store.getters.location;
    }
  },

  methods: {
      goToUser(userId) {
          this.$emit('goToUser', userId);
      }
  }
}
</script>