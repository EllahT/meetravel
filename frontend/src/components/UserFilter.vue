<template>
  <div class="user-filter">
    <label>Distance: </label>
    <input type="range" min=1 max=15000 v-model="filters.distance" @input="emitFilters"/>
    <div>
      <label>Age: From: </label>
      <input type="number" v-model="filters.age.from" @input="emitFilters"/>
      <label> To: </label>
      <input type="number" v-model="filters.age.to" @input="emitFilters"/>
    </div>
    <label> Gender: </label>
    <gender-picker v-model="filters.gender" @input="emitFilters"/>
    <!-- <label> Dates: </label>
    <date-picker v-model="filters.dates" @input="emitFilters"/> -->
    
  </div>
</template>

<script>
import GenderPicker from '@/components/GenderPicker.vue'
import DatePicker from '@/components/DatePicker.vue'

export default {
  props: {
    currFilter: {
      type: Object
    }
  },
  
  data() {
    return {
      filters: {
        distance: 15000,
        age: {from: 20, to: 80},
        gender: {type: 'all', display: 'All'},
        dates: {from: new Date(), to: new Date()}
      }
    }
  },

  created() {
    
    // this.filters = JSON.parse(JSON.stringify(this.currFilter));
  },

  methods: {
    emitFilters() {
        this.$emit('filterChanged',this.filters);
    }
  },

  components: {
    GenderPicker,
    DatePicker
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