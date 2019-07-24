<template>
  <section class="user-details" v-if="user">
    <div class="user-profile lato-light" v-if="user">
      <div class="cover parallax">
        <img :src="user.profileImg" class="profile-img" />
        <h1>{{user.name.first}} {{user.name.last}}, {{age}}</h1>
        <p>{{user.residance.city}}, {{user.residance.country}}</p>
      </div>
      <div class="user-info">
        <div class="flex start" style="align-items: baseline;">
          <h2>Bucket List</h2>
          <p v-for="place in user.bucketList" :key="place" class="tag">{{place}}</p>
        </div>
        <v-divider></v-divider>
        <h2>About me</h2>
        <p>{{user.description}}</p>
        <v-divider></v-divider>
        <div class="flex start" style="align-items: baseline;">
        <h2>Prefered Travel Type</h2>
        <p v-for=" type in user.travelTypes" :key="type">{{type}}</p>
        </div>
        <v-divider></v-divider>
        <div class="flex start" style="align-items: baseline;">
        <h2>Age</h2>
        <span>{{age}}</span>
        </div>
        <v-divider></v-divider>
        <div class="flex start" style="align-items: baseline;">
        <h2>location</h2>
        <span>{{distance}} km away</span>
        </div>
        <v-divider></v-divider>
      </div> 
    </div>
    <div class="actions">
      <button class="btn primary" @click="sendRequest" :disabled="possibleToRequest">
        <v-icon color="white" class="px-1">send</v-icon>      
      {{btnText}}
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
  
  async created() {
    const userId = this.$route.params.userId;
    const user = await this.$store.dispatch({ type: "loadUserById", userId });
    if (user) this.user = JSON.parse(JSON.stringify(user));
    else this.$router.push("/user");
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
    },

    btnText() {
      const id = this.user._id;
      return this.$store.getters.isFriendById(id)
        ? "Your friend"
        : this.$store.getters.isRequestedById(id)
        ? "Pending, waiting for your approve"
        : this.$store.getters.isRequesterById(id)
        ? "Pending, waiting for recipient approve"
        : "Send a request";
    },

    possibleToRequest() {
      const id = this.user._id;
      return !!(
        this.$store.getters.isFriendById(id) ||
        this.$store.getters.isRequestedById(id) ||
        this.$store.getters.isRequesterById(id)
      );
    }
  },

  methods: {
    async sendRequest() {
      let request = {
        createdAt: new Date().getTime(),
        location: this.$store.getters.location,
        sender: {
          userId: this.$store.getters.loggedInUser._id,
          name:
            this.$store.getters.loggedInUser.name.first +
            " " +
            this.$store.getters.loggedInUser.name.last
        },
        status: "pending",
        recipient: {
          userId: this.user._id,
          name: this.user.name.first + " " + this.user.name.last
        },
        messages: []
      };

        await this.$store.dispatch({ type: "sendRequest", request });
        console.log("request sent to", request.recipient);
        this.$noty.success(`Request sent to ${request.recipient.name}`);
        this.$router.push("/user");
    }
  }
};
</script>

<style lang="scss">
.user-details {
  .user-profile {
    margin: 0 auto;
    position: relative;
  }
  .btn.primary {
    position: fixed;
    bottom: 40px;
    right: 40px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.678);
  }

  text-align: center;

  .user-info {
  
    // text-align: left;
    margin: 20px ;
    display: flex;
    flex-direction: column;
    //  .flex {
    //     justify-content: flex-start;
    //   }

    ul {
      list-style: none;
    }
  }
  .px-1{
        margin-bottom: -4px
  }
}
</style>

