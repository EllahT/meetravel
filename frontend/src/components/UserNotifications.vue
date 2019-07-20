<template>
  <div>
      <ul>
      <li @click="readNofitication(index)" v-for="(notification, index) in notifications" :key="(notification || {}).timestamp">
        {{notification.message}} ({{notification.timestamp | timeAgo}})
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    notifications() {
      console.log(this.$store.getters.notifications);
      return this.$store.getters.notifications;
    }
  },

  methods: {
    readNofitication(index) {
      this.$store.dispatch({type: 'readNotification', index});
    }
  }
}
</script>
 
 <style scoped>
  ul {
    list-style: none;
  }
 </style>