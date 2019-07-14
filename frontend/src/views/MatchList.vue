<template>
     <ul v-if="matches">
        <match-preview v-for="match in matches" :match="match" :key="match._id"></match-preview>
    </ul>
</template>

<script>
import MatchPreview from "@/components/MatchPreview.vue";

export default {
  created() {
    this.$store.dispatch({type: 'loadMatches'});
  },
  computed: {
      matches() {
          return this.$store.getters.matches;
      }
  },
  components: {
    MatchPreview
  }
}
</script>
   