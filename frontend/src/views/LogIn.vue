<template>
  <section class="log-in">
    <form @submit.prevent="logIn">
      <input type="text" v-model="user.firstName" placeholder="Your first name" />
      <input type="password" v-model="user.password" placeholder="Your password" />
      <button>Login</button>
    </form>
  </section>
</template>

<script>
import UserService from "../services/UserService.js";

export default {
  data() {
    return {
      user: { firstName: "", password: "" }
    };
  },
  methods: {
    logIn() {
      // console.log('Login', this.user)
      this.$store
        .dispatch({ type: "login", user: this.user })
        .then(user => {
          this.$router.push("/user");
          //TODO: activate a method to alert the user about the failed function
        })
        .catch(err => {
          console.log("got here with a mistake");
        });
    }
  }
};
</script>
