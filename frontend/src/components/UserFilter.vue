<template>
  <div class="user-filter">
    <label>Distance: </label>
    <input type="range" min=1 max=15000 v-model="filterBy.distance" @input="emitfilterBy"/>
    <div>
      <label>Age: From: </label>
      <input type="number" v-model="filterBy.minAge" @input="emitfilterBy"/>
      <label> To: </label>
      <input type="number" v-model="filterBy.maxAge" @input="emitfilterBy"/>
    </div>
    <label> Gender: </label>
    <gender-picker v-model="filterBy.gender" @input="emitfilterBy"/>
    
  </div>
</template>

<script>
import GenderPicker from '@/components/GenderPicker.vue'

export default {
  props: {
    currFilter: {
      type: Object
    }
  },
  
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
    this.filterBy = JSON.parse(JSON.stringify(this.currFilter));
  },

  methods: {
    emitfilterBy() {
      this.$emit('filterChanged',this.filterBy);
    }
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