<template>
  <header>
    <v-layout class="app-header">
      <v-container class="flex hamburger-container" :class="{trans:isScroll }">
        <v-toolbar-side-icon flat color="" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
          <template v-slot:activator="{ on }">
            <v-btn flat color="" v-on="on" :class="classByUnread"><v-icon :color="colorByUnread">notifications</v-icon>({{unread}})</v-btn>
          </template>

          <user-notifications></user-notifications>
        </v-menu>
        <!-- <v-icon color="black">notifications</v-icon> -->
      </v-container>
      <!-- <div style=" margin-bottom: 80px;"></div> -->
      <v-navigation-drawer class="nav-container" v-model="drawer" absolute temporary>
        <v-list class="pa-1">
          <v-list-tile avatar v-if="(username !== null)">
            <v-list-tile-avatar>
              <img :src="imgProfile" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{username}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <button class="px-5 py-2"
            @click.stop="toggleShowNotifications"
            v-if="username"
            :class="classByUnread"
          >Notifications ({{unread}})</button>
          <user-notifications v-if="showNotifications"></user-notifications>

          <v-list-tile class="nav-item" v-for="item in items" :key="item.title">
            <router-link :to="item.link">
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon color="black" left>{{ item.icon }}</v-icon>
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </router-link>
          </v-list-tile>
          <v-list-tile class="nav-item">
            <router-link to="/signup">
              <v-list-tile-content @click="doLogOut">
                <v-list-tile-title>
                  <v-icon color="black" left>person</v-icon>LogOut
                </v-list-tile-title>
              </v-list-tile-content>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <new-notification v-if="newNotification !== null" :newNotification="newNotification"></new-notification>
  </header>
</template>

<script>
import NewNotification from "@/components/NewNotification";
import UserNotifications from "@/components/UserNotifications";

export default {
  data: () => ({
    menu: false,
    header: 300,
    isScroll: false,
    drawer: null,
    width: 300,
    items: [
      { icon: "home", title: "Home", link: "/" },
      { icon: "location_on", title: "Find Nearby", link: "/user" },
      { icon: "account_circle", title: "Edit Profile", link: "/profile" },
      // { icon: "notifications", title: "Notification", link: "" },
      { icon: "inbox", title: "Inbox", link: "/inbox/friends" },
      // { divider: true },
      { icon: "info", title: "About", link: "/about" },
      { icon: "insert_chart_outlined", title: "Admin", link: "/admin" },
      { icon: "person", title: "Login", link: "/login" },
      { icon: "person", title: "Signup", link: "/signup" }
    ],
    showNotifications: false
  }),

  methods: {
    getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    },
    doLogOut() {
      this.$store.dispatch({ type: "logout" });
    },

    toggleShowNotifications() {
      this.showNotifications = !this.showNotifications;
    }
  },

  computed: {
    username() {
      const logged = this.$store.getters.loggedInUser;
      if (logged === null) return null;
      return Object.keys(logged).length ? logged.name.first : null;
    },
    imgProfile() {
      const logged = this.$store.getters.loggedInUser;
      if (logged === null) return null;
      return Object.keys(logged).length ? logged.profileImg : null;
    },

    unread() {
      return this.$store.getters.unreadNotifications;
    },

    classByUnread() {
      return this.unread ? "unread" : "allread";
    },

    newNotification() {
      return this.$store.getters.newNotification;
    },

    colorByUnread() {
      return this.unread ? "red" : "black";
    }
  },
  created() {
    window.scroll(function() {
      var scroll = this.getCurrentScroll();
      if (scroll >= this.header) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    });
  },

  components: {
    UserNotifications,
    NewNotification
  }
};
</script>

<style style lang="scss">
.app-header {
  img {
    object-fit: cover;
  }
  .nav-item {
    a {
      text-decoration: none;
      color: black;
      width: 100%;
      padding: 5px;
      &:hover {
        background-color: rgb(221, 221, 221);
      }
    }
    // display: inline;
  }
  .hamburger-container {
    position: fixed;
    z-index: 4;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.945);
  }
  .hamburger-container.trans {
    background-color: rgba(255, 255, 255, 0);
  }
  .nav-container {
    position: fixed;
  }
}

.v-navigation-drawer {
  transition: none !important;
}

.signed {
  margin-left: 20px;
}

.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.unread {
  font-weight: bold;
  color: red;
}

</style>
