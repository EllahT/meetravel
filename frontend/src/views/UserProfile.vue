<template>
  <section class="user-profile lato-light" v-if="user">
    <div class="cover parallax">

      <div class="profile-img">
          <div class="actions">
          <h6 v-if="isLoadingPic">Image is coming soon</h6>
          <img :src="user.profileImg"/>
          <button @click.prevent="openFileInput" class="upload-btn">Update image</button>
          <input v-if="isFileUpload" @change="uploadImage" type="file"/>
          </div>
      </div>
<br>
<br>
            <!-- <div class="profile-img"> <img :src="user.profileImg"/></div> -->
      <!-- <div class="profile-img" :style="{'background-image': `url(${require(user.profileImg)})`}"></div> -->
      <h1>{{user.name.first}} {{user.name.last}}, {{age}}</h1>
      <p>{{user.residance.city}}, {{user.residance.country}}</p>

      <div class="actions flex">
        <div>
          <router-link to="/profile/edit" class="flex wrap">
            <v-icon color="white">edit</v-icon>Edit general info
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
        <h2>Wants to visit</h2>
        <ul class="flex wrap">
          <li v-for="place in user.bucketList" :key="place" class="tag">{{place}} &times</li>
          <!-- <li>
            <v-icon class="tag" @click="addPlace">add</v-icon>
          </li> -->
        </ul>
      </div>

      <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <h2>
          About me
          <v-icon v-on="on" title="Edit about me">edit</v-icon>
           </h2>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Edit about me:</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex>
                  <v-textarea 
                  hint="edit info"
                  v-model="user.description"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="editInfo(); dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

        <div class="flex">
          <p>{{user.description}}</p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
// import UtilService from "@/services/UtilService.js";

export default {
  data() {
    return {
      user: null,
      dialog: false,
      isLoadingPic: false,
      isFileUpload: false
    };
  },

  created() {
    this.user = this.$store.getters.loggedInUser;
  },

  computed: {
    age() {
      return new Date().getFullYear() - this.user.birthDate;
    }
  },
    methods: {
      editInfo (){
      this.$store.dispatch({ type: "updateUser", user: this.user }).then(() => {
        console.log("updated user");
      });
    },
     openFileInput() {
     this.isFileUpload = !this.isFileUpload;
   },

   uploadImage(event) {
     console.log('upload event pushed', event);
     
    //  this.isLoadingPic = true;
    //  this.$store.dispatch({type: 'uploadImg', event})
    //  .then(profileImg => {
    //    this.user.profileImg = profileImg;
    //    this.isLoadingPic = false;
    //  })

    // addPlace(){
    //   console.log('add place pushed');
      
    // }
        
      }
    }
}

</script>

<style lang="scss">
.upload-btn{
  color: black
}
</style>