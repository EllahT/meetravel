<template>
  <div class="user-edit lato-light" v-if="user">
    <h1 class="title">Edit profile settings</h1>
    <form @submit.prevent="saveUser">
      <v-text-field prepend-icon="email" v-model="user.email" label="email" type="email"></v-text-field>

      <v-select
        prepend-icon="people"
        v-model="user.gender"
        :items="items"
        label="Update gender"
        data-vv-name="select"
      ></v-select>

      <v-text-field
        prepend-icon="edit_location"
        v-model="user.residance.city"
        label="Location (City)"
        type="text"
      ></v-text-field>

      <v-text-field
        prepend-icon="edit_location"
        v-model="user.residance.country"
        label="Location (Country)"
        type="text"
      ></v-text-field>

      <v-text-field
        prepend-icon="event"
        v-model="user.birthDate"
        label="Year of birth"
        type="number"
      ></v-text-field>

      <button class="btn success" type="submit">{{btnText}}</button>
    </form>
  </div>
</template>

<script>
export default {
  created() {
    this.getUser()
  },

  data() {
    return {
      user: {
        residance: {
          city: null,
          country: null
        }
      },
      gender: null,
      items: ["", "Man", "Woman", "Other"]
    };
  },

  computed: {
    btnText() {
      return this.user._id ? "Update" : "Add";
    }
  },

  methods: {
    async saveUser() {
      await this.$store.dispatch({ type: "updateUser", user: this.user });
      console.log("updated user");
      this.$router.push("/user");
    },
    
    getUser() {
      var user = this.$store.getters.loggedInUser;
      console.log("user", user);
      this.user = user;
    }
  },

  components: {}
};
</script>

<style lang="scss">
.user-edit {
  margin: 10px;
  padding: 70px;
   input {
      padding: 10px;
      margin-top: 10px;
    }
  .title {
  color: white;
  background-color: rgb(48, 165, 48);
  padding: 10px;
  margin: 20px;
  position: left;
  max-width: 250px;
  text-align: center;
  border-radius: 10px;
}
}

@media screen and (max-width: 550px) {
 .user-edit {
  padding: 70px 20px;
 }
}


</style>


