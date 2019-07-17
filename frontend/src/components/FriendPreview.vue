<template>
  <li class="friend-preview" v-if="friend">
    <div>
    <h4>{{friend.name}}</h4>
    <h4>{{friend.city}}, {{friend.country}}</h4>
    </div>
    <img :src="friend.image"/>
    
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

// <h5>{{friend.location}}</h5>
//     <h5>{{friend.createdAt}}</h5>
//     <h5>{{friend.members._id}}</h5>

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




