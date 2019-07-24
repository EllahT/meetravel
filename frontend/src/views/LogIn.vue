<template>
  <section class="log-in">
        <v-form @submit.prevent="doLogIn">
            <v-text-field class="user-name" prepend-icon="person" v-model="user.username" label="User name" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="user.password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <button class="btn success" type="submit">LogIn</button>
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
    async doLogIn() {
      try {
        await this.$store.dispatch({ type: "login", user: this.user });
        this.$router.push("/user");
      }
      
      catch(err) {
          console.log("got here with a mistake",err);
      }
    }
  }
};
</script>

<style lang="scss">
.log-in{
    margin: 10px;
    padding: 70px;
    input {
      padding: 10px;
      margin-top: 10px;
    }
}
 

@media screen and (max-width: 550px) {
 .log-in {
  padding: 70px 20px;
 }
}
</style>