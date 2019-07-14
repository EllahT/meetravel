<template>
     <ul>
    <match-preview v-for="match in matches" :match="match" :key="match._id"></match-preview>
    </ul>
</template>

<script>
import MatchPreview from "@/components/MatchPreview.vue";

export default {
  data() {
    return {
      matches: []
    }
  },
  created() {
    this.$store.dispatch({type: 'loadMatces'});
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
   