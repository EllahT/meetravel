<template>
  <header>
    <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user">Find Travelers</router-link> |
    <router-link to="/profile">Profile</router-link> | 
    <router-link to="/admin">Admin</router-link> | 
    <router-link to="/inbox">Inbox</router-link> | 
    <router-link to="/login">LogIn</router-link> | 
    <router-link to="/signup">SignUp</router-link> |
    <button @click="doLogOut">LogOut</button>
    <div v-if="(username !== null)">
      Signed: {{username}}
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    sideNav: true,
    width: 300,
    items: [
      { icon: "home", title: "Home", link: "/" },
      { icon: "photo_library", title: "Trip Images", link: "" },
      { icon: "location_on", title: "Find Nearby", link: "/users" },
      { icon: "notifications", title: "Notification", link: "" },
      { divider: true },
      { icon: "account_circle", title: "Edit Profile", link: "/profile" },
      { icon: "flight_takeoff", title: "My Trips", link: "" },
      { icon: "how_to_reg", title: "My Matches", link: "" },
      { icon: "info", title: "About", link: "/about" },
      { icon: "insert_chart_outlined", title: "Admin", link: "" }
    ]
  }),
  methods: {
    doLogOut() {
      this.$store.dispatch({type: 'logout'})
    },
  },

  computed: {
    username() {
      const logged = this.$store.getters.loggedInUser;
      if (logged === null) return null;
      return (Object.keys(logged).length)? logged.name.first : null;
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  transition: none !important;
}

.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
</style>
