<template>
  <li class="match-preview" v-if="match">
    <h4>{{match._id}}</h4>
    <img :src="match.image"/>
    <h5>{{match.location}}</h5>
    <h5>{{match.createdAt}}</h5>
    <h5>{{match.members._id}}</h5>
  </li>
</template>


<script>

export default {
  props: {
      match: {
          type: Object,
          require: true
      }
  },
  
  created (){    
  },

  computed: {

  },

  methods: {

  }
}

</script>

<style >
.match-preview {
    max-width: 650px;
    margin-top:5px;
    padding: 5px;
    border-width:1px;
    border-style: solid;
    border-color: blue;
    border-width: 1px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
</style>




