<template>
  <section class="user-details">
    <div class="user-profile lato-light" v-if="user">
      <div class="cover parallax">
        <img :src="user.profileImg" class="profile-img" />
        <h1>{{user.name.first}} {{user.name.last}}, {{age}}</h1>
        <p>{{user.residance.city}}, {{user.residance.country}}</p>
      </div>
      <div class="user-info">
        <div>
          <h2>Bucket List</h2>
          <ul class="flex wrap">
            <li v-for="place in user.bucketList" :key="place" class="tag">{{place}}</li>
          </ul>
        </div>
        <h2>About me</h2>
        <p>{{user.description}}</p>
        <h2>Prefered Travel Type</h2>
        <p v-for=" type in user.travelTypes" :key="type">{{type}}</p>
        <h2>Age</h2>
        <span>{{age}}</span>
        <h2>location</h2>
        <span>{{distance}} km away</span>
      </div>
    </div>
    <div class="actions">
      <button class="btn primary" @click="sendRequest">
        <v-icon color="white" class="px-1">send</v-icon>Send a request
        <span class="shiny"></span>
      </button>
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
    const userId = this.$route.params.userId;
    this.$store.dispatch({ type: "loadUserById", userId }).then(user => {
      if (user) this.user = JSON.parse(JSON.stringify(user));
      else this.$router.push("/user");
    });
  },

  computed: {
    distance() {
      return UtilService.calulateDistance(
        this.$store.getters.location,
        this.user.location
      );
    },

    age() {
      return new Date().getFullYear() - this.user.birthDate;
    }
  },

  methods: {
    sendRequest() {
      this.$store.dispatch({ type: "sendRequest", user: this.user._id });
      this.$router.push("/user");
    }
  }
};
</script>

<style lang="scss">
.user-details {
  .user-profile {
    position: relative;
  }
  .btn.primary {
    position: fixed;
    bottom: 40px;
    left: 40px;
    box-shadow: 10px 20px 60px rgb(0, 0, 0);
  }

  text-align: center;

  .user-info {
    // text-align: left;
    margin: 20px;
    display: flex;
    flex-direction: column;
    //  .flex {
    //     justify-content: flex-start;
    //   }

    ul {
      list-style: none;
    }
  }
}
</style>

