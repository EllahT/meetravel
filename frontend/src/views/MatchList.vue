<template>
  <div>
     <v-flex>
    <match-preview v-for="match in matches" :match="match" :key="match._id"></match-preview>
    </v-flex>
  </div>
</template>

<script>
import MatchPreview from "@/components/MatchPreview.vue";

export default {
  data() {
    return {
      matches: []
    }
  },

  components: {
    MatchPreview
  }
};
</script>
   