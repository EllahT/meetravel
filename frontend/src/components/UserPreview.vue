<template>
  <li class="user-preview flex column" v-if="user" :class="isAdminPageClass">
    <div class="flex user-nav">
      <button class="btn-arrow bounce" v-if="!isAdminPage" @click.stop="emitNavUsers(-1)">
        <v-icon color="white">keyboard_arrow_left</v-icon>
      </button>
      <router-link :to="detailsUrl">
      <figure class="snip1529 img-container">
        <img
          :src="user.profileImg"
          
        />
        <div class="date">
          <span class="day">{{distance}}</span>
          <span class="month">km</span>
        </div>
        <figcaption>
          <h3>{{user.name.first}} {{user.name.last}}, {{age}}</h3>
          <!-- <h3></h3> -->
          <p>{{user.residance.city}}, {{user.residance.country}}</p>
         
        </figcaption>
        <div @mouseleave="isHover = false" :class="{hover: isHover}">
          <i >View profile</i>
        </div>
        <a href="#"></a>
       
      </figure>
    </router-link>
    
      <button class="btn-arrow bounce" v-if="!isAdminPage" @click.stop="emitNavUsers(1)">
        <v-icon color="white">keyboard_arrow_right</v-icon>
      </button>
    </div>
     <button
      class="btn primary"
      v-if="!isAdminPage"
      @click="emitRequest"
      :disabled="possibleToRequest"
    >
      {{btnText}}
      <span class="shiny"></span>
    </button>
    <!-- <div
        class="img-container flex column lato-light"
        :style="{ backgroundImage: `url('${user.profileImg}')` }"
      >
      <div class="user-location">
          <h5><v-icon>location_on</v-icon> {{distance}}km away</h5>
          </div>
          <div class="personal-details">

          <h4 class="Lato-bold">{{user.name.first}} {{user.name.last}}</h4>
          <h5>{{user.residance.city}}, {{user.residance.country}}</h5>
          </div>
    </div>-->
    <!-- <div class="details-container">
      <div>
        <h1>
          About Me
        </h1>
        <p>
          {{user.description}}
        </p>
        <h1>
          Bucket list
        </h1>
        <ul>
        <li v-for="place in user.bucketList" :key="place">#<i>{{place}}</i></li>
        </ul>
      </div>
    </div>-->
    <div v-if="isAdminPage" class="actions">
      <router-link :to="editUrl">Edit</router-link>|
      <button @click="emitDelete" title="delete user">x</button>
    </div>
    <!-- <button @click="changePic">changePic</button> -->
  </li>
</template>

<script>
import GecoodeService from "@/services/GeocodeService.js";
import UtilService from "@/services/UtilService.js";
import ImageService from "@/services/ImageService.js";
import UserService from "@/services/UserService.js";

export default {
  props: {
    user: {
      type: Object,
      require: true
    },

    type: {
      type: String,
      require: false
    }
  },
  data() {
    return {
      isHover: true
    }
  },

  computed: {
    age() {
      return new Date().getFullYear() - this.user.birthDate;
    },
    detailsUrl() {
      return `/user/${this.user._id}`;
    },

    editUrl() {
      return `/profile/edit`;
    },

    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },

    isAdminPage() {
      return this.type === "admin";
    },

    isAdminPageClass() {
      return this.type === "admin" ? "admin" : "";
    },

    distance() {
      return UtilService.calulateDistance(
        this.$store.getters.location,
        this.user.location
      );
    },

    btnText() {
      const id = this.user._id;
      return this.$store.getters.isFriendById(id)
        ? "Already your friend"
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
    emitDelete() {
      this.$parent.$emit("delete-user", this.user._id);
    },

    emitRequest() {
      this.$emit("request", {
        userId: this.user._id,
        name: this.user.name.first + " " + this.user.name.last
      });
    },

    emitNavUsers(diff) {
      this.$emit("nav", diff);
    },

    async changePic() {
      let newUser = JSON.parse(JSON.stringify(this.user));
      const imgSrc = await ImageService.getRandomImg("travel")
      newUser.profileImg = imgSrc;
      await UserService.update(newUser)
      console.log("done");
    }
  }
};
</script>

<style lang="scss">
.user-preview {
  a {
    color: inherit;
    text-decoration: none;
  }
}

.user-preview.admin {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(168, 168, 168);
  border-width: 1px;
  margin: 10px;
  padding: 10px;
  // border-radius: 20px;
}
</style>
