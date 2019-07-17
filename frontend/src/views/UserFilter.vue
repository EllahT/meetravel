<template>
  <div class="user-filter">
    <label>Distance: </label>
    {{filterBy.distance}}
    <input type="range" min=1 max=100 v-model="filterBy.distance" @input="setFilter"/>
    <div>
      <label>Age: From: </label>
      <input type="number" v-model="filterBy.minAge" @input="setFilter"/>
      <label> To: </label>
      <input type="number" v-model="filterBy.maxAge" @input="setFilter"/>
    </div>
    <label> Gender: </label>
    <gender-picker v-model="filterBy.gender" @input="setFilter"/>
    <router-link to="/user">Back To Travelers</router-link>
  </div>
</template>

<script>
import GenderPicker from '@/components/GenderPicker.vue'

export default {

  data() {
    return {
      filterBy: {
        distance: 20,
        minAge: 20,
        maxAge: 80,
        gender: 'all'
      }
    }
  },

  created() {
    this.filterBy = JSON.parse(JSON.stringify(this.$store.getters.filterBy));
  },

  methods: {
    setFilter() {
      this.$store.dispatch({type:'setFilter', filterBy: this.filterBy});
    },
  },

  components: {
    GenderPicker
  }
}
</script>
 
 <style lang="scss">
  .user-filter {
    display: flex;
    justify-content: center;
    
    input {
      max-width: 50px;
      margin: 0 10px;
    }
  }
 </style>