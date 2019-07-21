<template>
  <div>
      <ul>
        <li @click="readNofitication(index)" v-for="(notification, index) in notifications" :key="(notification || {}).timestamp">
          {{notification.message}} ({{notification.timestamp | timeAgo}})
        </li>
    </ul>
    <input :value="newNotification" @change="showNewNofitication"/>
  </div>
</template>

<script>
export default {
  computed: {
    notifications() {
      return this.$store.getters.notifications;
    },

    newNotification() {
      return this.$store.getters.newNotification
    }
  },

  methods: {
    readNofitication(index) {
      this.$store.dispatch({type: 'readNotification', index});
    },

    showNewNofitication() {
      console.log('got to show new')
      this.$noty.info("You've got Mail!", this.newNotification.message);
      this.$store.dispatch({type: 'clearNewNotification'});
    }
  }
}
</script>
 
 <style scoped>
    ul {
      list-style: none;
    }
 </style>