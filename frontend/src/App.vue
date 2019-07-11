<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <h1>check push</h1>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'

  export default {
    components: {
      AppHeader
    }
  }
</script>

