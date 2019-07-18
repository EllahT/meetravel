<template>
  <section class="log-in">
        <v-form @submit.prevent="doLogIn">
            <v-text-field prepend-icon="person" v-model="user.username" label="First name" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="user.password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <button class="btn" type="submit">LogIn</button>
              </v-card-actions>
        </v-form>
  </section>
</template>

<script>
import UserService from "../services/UserService.js";

export default {
  data() {
    return {
      user: { username: "", password: "" }
    };
  },
  methods: {
    doLogIn() {
      console.log('Login', this.user)
      this.$store
        .dispatch({ type: "login", user: this.user })
        .then(user => {
          this.$router.push("/user");
          //TODO: activate a method to alert the user about the failed function
        })
        .catch(err => {
          console.log("got here with a mistake",err);
        });
    }
  }
};
</script>

<style lang="scss">
.log-in{
    margin: 10px;
    padding: 10px
}
</style>