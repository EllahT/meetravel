<template>
  <section class="user-profile lato-light">
    <div class="cover parallax">
      <img
        class="profile-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/will-smith-attends-varietys-creative-impact-awards-and-10-news-photo-503285822-1556386503.jpg?crop=0.668xw:1.00xh;0.138xw,0&resize=480:*"
      />
      <h1>User Name</h1>
      <p>City, Country</p>
      <div class="actions flex">
        <div>
          <router-link to="/profile/edit" class="flex wrap">
            <v-icon color="white">edit</v-icon>Edit General Info
          </router-link>
        </div>
        <div>
          <router-link to="/matchs">
            <v-icon color="white">people</v-icon>Friends
          </router-link>
        </div>
       
      </div>
    </div>
    <div class="user-info">
      <div>
        <h2>Wants To Visit<v-icon >edit</v-icon></h2>
        <div class="flex wrap">
        <p class="tag">Tel Aviv, Israel &times</p>
        <p class="tag">Los Angeles, California &times</p>
        </div>
        
      </div>
      <div>
        <h2>About Me<v-icon>edit</v-icon></h2>
        <div class="flex">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias at rerum impedit deleniti? Dolor aperiam eum assumenda aspernatur nihil modi, magnam omnis eos, obcaecati, maiores ipsam ratione natus accusamus unde?</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: null
    };
  },

  created() {
    this.user = this.$store.getters.loggedInUser;
  }
};
</script>

<style lang="scss">
.user-profile {
  text-align: center;

  img {
    border-radius: 50%;
  }
}
</style>