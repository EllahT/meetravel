<template>
  <div>
    <v-card 
      @click="readNofitication(index)"
      v-for="(notification, index) in notifications"
      :key="(notification || {}).timestamp"
    >
      <v-list> 
        <v-list-tile>
          <v-icon>supervised_user_circle</v-icon>
          <v-btn class="icons" :class="fav ? 'blue--text' : ''" icon @click="fav = !fav">
              <v-icon class = "envelope" v-if=(!notification.readStatus)>markunread</v-icon>
              <v-icon class = "envelope" v-else>drafts</v-icon>
          </v-btn>
          <router-link v-if="notification.type === 'friendship'" title="To friends inbox" to="/inbox/friends">
           <v-list-tile-content>
            <v-list-tile-title>{{notification.message}}</v-list-tile-title>
            <v-list-tile-sub-title> ({{notification.timestamp | timeAgo}})
            </v-list-tile-sub-title>
          </v-list-tile-content>
          </router-link>
          <router-link v-if="notification.type === 'request'" title="To requests inbox" to="/inbox/requests">
           <v-list-tile-content>
            <v-list-tile-title>{{notification.message}}</v-list-tile-title>
            <v-list-tile-sub-title> ({{notification.timestamp | timeAgo}})
            </v-list-tile-sub-title>
          </v-list-tile-content>
          </router-link>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
      message: false,
      hints: true
    };
  },
  computed: {
    notifications() {
      return this.$store.getters.notifications;
    }
  },

  methods: {
    readNofitication(index) {
      this.$store.dispatch({ type: "readNotification", index });
    }
  }
};
</script>
 
 <style scoped>
ul {
  list-style: none;
}
.envelope{
padding-right: 15px;
padding-left: 5px;
}
.icons{
cursor: default
}
a{
  text-decoration: none;
  color: inherit;
}
</style>