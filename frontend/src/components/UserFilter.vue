<template>
  <div>
    <label>Distance: </label>
    <input type="range" min=1 max=20 v-model="filters.distance" @input="emitFilters"/>
    <label>Age: </label>
    <input type="number" v-model="filters.fromAge"/>
    <label> To: </label>
    <input type="number" v-model="filters.toAge"/>
    <label> Gender: </label>
    <select>
        <option value="all">All</option>
        <option value="f">Female</option>
        <option value="m">Male</option>
        <option value="o">Other</option>
    </select>
  </div>
</template>

<script>

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
        gender: 'all'
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
  }
}
</script>
 