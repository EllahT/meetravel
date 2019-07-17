<template>
  <section class="user-profile lato-light" v-if="user">
    <div class="cover parallax">
      <img class="profile-img" :src="user.profileImg" />
      <h1>{{user.name.first}} {{user.name.last}}, {{age}}</h1>
      <p>{{user.residance.city}}, {{user.residance.country}}</p>

      <div class="actions flex">
        <div>
          <router-link to="/profile/edit" class="flex wrap">
            <v-icon color="white">edit</v-icon>Edit General Info
          </router-link>
        </div>
        <div>
          <router-link to="/friends">
            <v-icon color="white">people</v-icon>Friends
          </router-link>
        </div>
      </div>
    </div>
    <div class="user-info">
      <div>
        <h2>Wants To Visit</h2>
        <ul class="flex wrap">
          <li v-for="place in user.bucketList" :key="place" class="tag">{{place}} &times</li>
          <li>
            <v-icon class="tag">add</v-icon>
          </li>
        </ul>
      </div>

      <div>
        <h2>
          About Me
          <v-icon>edit</v-icon>
        </h2>
        <div class="flex">
          <p>{{user.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UtilService from "@/services/UtilService.js";

export default {
  data() {
    return {
      user: null
    };
  },

  created() {
    this.user = this.$store.getters.loggedInUser;
  },

  computed: {
    age() {
      return new Date().getFullYear() - this.user.birthDate;
    }
  }
};

//    <div>
// <h2>Prefered Travel Type:</h2>
// {{user.travelType}}
//       </div>
</script>

<style lang="scss">
.user-profile {
  text-align: center;

  img {
    border-radius: 50%;
  }
}
</style>