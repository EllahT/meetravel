<template>
  <div class="user-details">
      <h1>{{user.name}}</h1>
      {{user}}
      <!-- <h4>Gender: {{user.gender.display}}</h4> -->
      <div class="actions">
        <button @click="likeUser(user._id)">Send a request</button>
      </div>


    </div>
</template>

<script>

export default {
   data() {
      return {
          user: {
              _id: '',
              name: '',
              gender: {type: '', display: ''},
          }
      }
  },
  created() {
      const userId = this.$route.params.userId;      
      this.$store.dispatch({type: 'loadUsers'})
      .then (() => {
        if (userId) this.user = JSON.parse(JSON.stringify(this.$store.getters.userById(userId)));
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
}
</script>

