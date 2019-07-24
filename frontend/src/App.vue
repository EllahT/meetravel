<template>
  <v-app id="app">
    <app-header v-if="showNav"></app-header>
    <router-view @homepage="toggleNav" />
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  data() {
    return {
      showNav: true
    };
  },

  created() {
    this.$store.dispatch({ type: "loadUserOrDefaultUser" });
  },

  methods: {
    toggleNav(val) {
      this.showNav = val;
    }
  },

  components: {
    AppHeader,
    AppFooter
  }
};
</script>

