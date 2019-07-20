<template>
  <li class="user-preview" v-if="user" :class="isAdminPageClass">
    <button  v-if="!isAdminPage" @click="emitNavUsers(-1)"><v-icon>keyboard_arrow_left</v-icon></button>
    <div class="details-container">
      <router-link :to="detailsUrl">
        <h4>{{user.name.first}} {{user.name.last}}</h4>
        <img :src="user.profileImg"/>
        <h5>location: {{distance}}km away</h5> 
      </router-link> 
      <div v-if="isAdminPage" class="actions">
        <router-link :to="editUrl">Edit</router-link> |
        <button @click="emitDelete" title="delete user">x</button>
      </div>
        <v-btn v-if="!isAdminPage" @click="emitRequest" :disabled="possibleToRequest">{{btnText}}</v-btn>
    </div>
    <button  v-if="!isAdminPage" @click="emitNavUsers(1)"><v-icon>keyboard_arrow_right</v-icon></button>
    <button @click="changePic">changePic</button>
  </li>
</template>

<script>
import GecoodeService from '@/services/GeocodeService.js';
import UtilService from '@/services/UtilService.js';
import ImageService from '@/services/ImageService.js';
import UserService from '@/services/UserService.js';

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

  computed: {
    detailsUrl() {
      return `/user/${this.user._id}`;
    },

    editUrl() {
      return `/profile/edit`;
    },

    fullName(){
      return this.user.firstName + ' ' + this.user.lastName
    },

    isAdminPage() {
      return this.type === 'admin';
    },

    isAdminPageClass() {
      return (this.type === 'admin')? 'admin' : '';
    },

    distance() {
      return UtilService.calulateDistance(this.$store.getters.location, this.user.location);
    },

    btnText() {
      const id = this.user._id;
      return (this.$store.getters.isFriendById(id)) ? 'Your Friend' 
      : (this.$store.getters.isRequestedById(id)) ? 'Pending, waiting for your approve' 
      : (this.$store.getters.isRequesterById(id)) ? 'Pending, waiting for recipient approve'
      : 'Send A Request';
    },

    possibleToRequest() {
      const id = this.user._id;
      return (!(!((this.$store.getters.isFriendById(id)) 
      || (this.$store.getters.isRequestedById(id)) 
      || (this.$store.getters.isRequesterById(id)))))
    }
  },

  methods: {
    emitDelete(){
      this.$parent.$emit('delete-user', this.user._id)
    },

    emitRequest() {
      this.$emit('request', {userId: this.user._id, name: this.user.name.first + ' ' + this.user.name.last});
    },

    emitNavUsers(diff) {
      this.$emit('nav', diff);
    },

    changePic() {
      let newUser = JSON.parse(JSON.stringify(this.user));
      ImageService.getRandomImg('travel')
      .then(imgSrc => {
        newUser.profileImg = imgSrc;
        UserService.update(newUser)
        .then(() => {
          console.log('done')
        })
      })
    }
  },
}

</script>

<style lang="scss">
.user-preview {
    max-width: 650px;
    margin-top:5px;
    padding: 5px;
    border: none;
    display: flex;

    h4, h5, img {
      margin-bottom: 20px;
    }

    .details-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    button {
      outline: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
}

.user-preview.admin {
    border-width:1px;
    border-style: solid;
    border-color: blue;
    border-width: 1px;
    border-radius: 20px;
}

</style>
