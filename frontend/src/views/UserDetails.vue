<template>
  <div class="user-details">
      <h1>{{user.name}}</h1>
      <!-- <h4>Gender: {{user.gender.display}}</h4> -->
      <div class="actions">
        <button @click="likeUser(user._id)">Like/Message</button>
      </div>
      <trip-list></trip-list>
      <!-- <user-preview></user-preview> -->
    </div>
</template>

<script>
import TripList from '@/components/TripList.vue'
// import UserPreview from '../components/UserPreview.vue'
export default {
   data() {
      return {
          user: {
              _id: '',
              name: '',
              // gender: {type: '', display: ''},
          }
      }
  },
  created() {
      const userId = this.$route.params.userId;      
      this.$store.dispatch({type: 'loadUsers'})
      .then (() => {
        console.log('userId after promise:', userId);
        if (userId) this.user = JSON.parse(JSON.stringify(this.$store.getters.loggedInUser(userId)));
        else this.$router.push('/user');
      })
      
  },

  methods: {
    likeUser(userId) {
      this.$store.dispatch({type: 'likeUser', userId}).then(() => {
      this.$router.push('/user');
      })
    }
  },

  components: {
    TripList
  }
}
</script>

