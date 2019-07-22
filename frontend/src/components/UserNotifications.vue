<template>
  <div>
    <v-card 
      @click="readNofitication(index)"
      v-for="(notification, index) in notifications"
      :key="(notification || {}).timestamp"
    >
      <v-list >
        <v-list-tile  >
          <v-btn :class="fav ? 'blue--text' : ''" icon @click="fav = !fav">
              <v-icon>supervised_user_circle</v-icon>
            </v-btn>
          <!-- <v-list-tile-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-list-tile-avatar> -->

          <v-list-tile-content>
            <v-list-tile-title>{{notification.message}}</v-list-tile-title>
            <v-list-tile-sub-title> ({{notification.timestamp | timeAgo}})</v-list-tile-sub-title>
          </v-list-tile-content>

          <!-- <v-list-tile-action>
            
          </v-list-tile-action> -->
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <!-- <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn flat @click="menu = false">Cancel</v-btn>
        <v-btn color="primary" flat @click="menu = false">ok</v-btn>
      </v-card-actions> -->
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
</style>