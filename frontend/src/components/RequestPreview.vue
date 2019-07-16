<template>
  <li class="request-preview" v-if="request">
    <router-link :to="senderUrl" v-if="sender"><img :src="senderImage"/></router-link>
    <h4> {{request.sender.name}}</h4>
    <h4> sent {{time}}</h4>
    <button @click="approveRequest">Approve Friendship Request</button>
  </li>
</template>

<script>

import moment from 'moment'

export default {
  props: {
      request: {
          type: Object,
          require: true
      }
  },

  data() {
      return {
          sender: null
      }
  },

  created() {
      this.$store.dispatch({type: 'loadUserById', userId: this.request.sender.userId})
      .then(sender => {
          this.sender = sender;
      })
  },

  computed: {
    senderUrl() {
      return `/user/${this.request.sender.userId}`
    },

    time() {
      return moment(this.request.createdAt).fromNow();
    },

    senderImage() {
        return this.sender.profileImg;
    }

  },

  methods: {
    approveRequest() {
      this.$store.dispatch({type: 'approveRequest', requestId: this.request._id})
      .then(() => {
        console.log('request approved, user is now in your friends list');
      })
    }
  }
}

</script>

<style lang="scss">
.request-preview {
    max-width: 650px;
    margin-top:5px;
    padding: 5px;
    border-width:1px;
    border-style: solid;
    border-color: blue;
    border-width: 1px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 50px;
      border-radius: 50%;
    }
}
</style>




