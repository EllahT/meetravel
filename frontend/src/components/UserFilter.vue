<template>
  <div class="user-filter">
    <label>Distance: </label>
    <input type="range" min=1 max=15000 v-model="filterBy.distance" @input="emitfilterBy"/>
    <div>
      <label>Age: From: </label>
      <input type="number" v-model="filterBy.age.from" @input="emitfilterBy"/>
      <label> To: </label>
      <input type="number" v-model="filterBy.age.to" @input="emitfilterBy"/>
    </div>
    <label> Gender: </label>
    <gender-picker v-model="filterBy.gender" @input="emitfilterBy"/>
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
      filterBy: {
        distance: 15000,
        age: {from: 20, to: 80},
        gender: {type: 'all', display: 'All'},
        dates: {from: new Date(), to: new Date()}
      }
    }
  },

  created() {
    
    // this.filterBy = JSON.parse(JSON.stringify(this.currFilter));
  },

  methods: {
    emitfilterBy() {
        this.$emit('filterChanged',this.filterBy);
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