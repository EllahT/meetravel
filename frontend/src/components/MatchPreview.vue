<template>
  <li class="match-preview" v-if="match">
    <h1>i'm match preview</h1>
  </li>
</template>

<script>

export default {
  props: {
      match: {
          type: Object,
          require: true
      },
  },

  computed: {

  },

  methods: {

  }
}

</script>

<style >

</style>
