<template>
  <li class="friend-preview" v-if="friend">
    <h4>{{friend._id}}</h4>
    <img :src="friend.image"/>
    <h5>{{friend.location}}</h5>
    <h5>{{friend.createdAt}}</h5>
    <h5>{{friend.members._id}}</h5>
  </li>
</template>


<script>

export default {
  props: {
      friend: {
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
.friend-preview {
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




