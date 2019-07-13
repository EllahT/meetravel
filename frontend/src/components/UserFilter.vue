<template>
  <div>
    <label>Distance: </label>
    <input type="range" min=1 max=20 v-model="filters.distance" @input="emitFilters"/>
    <label>Age: </label>
    <input type="number" v-model="filters.fromAge"/>
    <label> To: </label>
    <input type="number" v-model="filters.toAge"/>
    <label> Gender: </label>
    <gender-picker v-model="filters.gender"></gender-picker>
    <label> Dates: </label>
    <date-picker v-model="filters.dates"></date-picker>
    
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
        distance: 5,
        fromAge: 20,
        toAge: 50,
        gender: {type: 'a', display: 'All'},
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
 