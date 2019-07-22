<template>
  <div>
  </div>
</template>

<script>
import 'vuejs-noty/dist/vuejs-noty.css';

export default {
    props: ['newNotification'],
    created() {
      if (this.newNotification.type === 'request') {
        this.$noty.info(this.newNotification.message)
      } else if (this.newNotification.type === 'friendship') {
        this.$noty.success(this.newNotification.message)
      }

      setTimeout(() => {
              this.$store.dispatch({type: 'clearNewNotification'});
        }, 1000)
  },
}
</script>

