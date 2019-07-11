<template>
  <div class="homepage">
      <form v-if="!loggedInUser" @submit.prevent="changedLoggedUser">
        <label>Username: </label>
        <input type="text" v-model="username"/>
        <label>Password: </label>
        <input type="password" v-model="password"/>
        <button>Login</button>
        <router-link to="/user/edit">Sign Up</router-link>
      </form>
  </div>
</template>

<script>

export default {
  name: 'home',
  
  data() {
    return {
        username: '',
        password: ''
    }
  },

  created() {
    
  },

  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    }
  },

  methods: {
    changedLoggedUser() {
      this.$store.dispatch({type: 'login', username: this.username, password: this.password})
      .then(() => {
        this.username = '';
        this.password = '';
      })
    }
  }
};
</script>

