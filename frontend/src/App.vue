<template>
  <v-app id="app">
    <app-header v-if="showNav"></app-header>
    <router-view @homepage="toggleNav"/>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'
  export default {
    data() {
      return {
        showNav: true
      }
    },

    created() {
      this.$store.dispatch({type: 'loadUserOrDefaultUser'})
    },

    methods: {
      toggleNav(val) {
        this.showNav = val;
      }
    },

    components: {
      AppHeader
    }
  }
</script>

