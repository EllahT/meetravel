<template>
  <li class="request-preview" v-if="request">
    <router-link :to="senderUrl" v-if="sender" title="Show profile"><img :src="senderImage"/></router-link>
    <h4> {{request.sender.name}}</h4>
    <h4> sent {{time}}</h4>
    <button @click="approveRequest" class="btn">Confirm?</button>
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

  async created() {
      const sender = await this.$store.dispatch({type: 'loadUserById', userId: this.request.sender.userId})
      this.sender = sender;
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
    async approveRequest() {
      await this.$store.dispatch({type: 'approveRequest', requestId: this.request._id})
      console.log('request approved, user is now in your friends list');
      setTimeout(() => {
        this.$router.push('/inbox/friends');
      }, 100)
    }
  }
}

</script>

<style lang="scss">
.request-preview {
    max-width: 550px;
    // margin-top:5px;
    // padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin: 5px 0;
    // padding: 10px 8px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid transparent;
    color: #6f7069;

    img {
      max-width: 50px;
      max-height: 50px;
      border-radius: 50%;
      margin: 10px;
      cursor: pointer;
    }

    a {
      color: inherit;
    }
}

.request-preview:hover {
      border-top: 1px solid #9a9b94;
      border-bottom: 1px solid #9a9b94;
      color: #52524e;
    }
</style>





