<template>
<div>
  <li class="friend-preview" v-if="friendship">
    <h4>You and <router-link :to="friendUrl">{{friendName}}</router-link></h4>
    <img v-if="friendImg" :src="friendImg"/>
    <h5>friends since :{{time}}</h5>
    <!-- <router-link :to="detailsUrl">talk and set a trip together!</router-link> -->
    <button @click="toggleShowChat">Chat and set a trip together!</button>
    <chat-room  v-if="showChat && friendship" :friendshipId="friendship._id" :history="friendship.messages" :friendImg="friendImg" :friendName="friendName" @close="toggleShowChat">
      <div></div>
    </chat-room>
  </li>

      <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="blue" dark>
            <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
            <v-toolbar-title>Inbox</v-toolbar-title>
            </v-toolbar>
            <v-toolbar color="grey" dark>
            <v-toolbar-title>My friends</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn> -->
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items.slice(0, 6)">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
              <v-list-tile v-else :key="item.title" avatar @click="">
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
</div>
  
</template>

<script>
import ChatRoom from '@/components/ChatRoom.vue';
import moment from 'moment';

export default {
  props: {
      friendship: {
          type: Object,
          require: true
      }
  },

  data() {
    return {
      showChat: false,
      items: [
      { header: 'Today' },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
      { divider: true, inset: true },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
      { divider: true, inset: true },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
      { divider: true, inset: true },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', title: 'Birthday gift', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
      { divider: true, inset: true },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
    ]
    }
  },

  computed: {
    detailsUrl() {
      return `/inbox/friends/${this.friendship._id}`;
    },

    friendImg() {
      const friendId = (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))
        ? this.friendship.recipient.userId 
        : this.friendship.sender.userId ;
      let friend = this.$store.getters.userById(friendId);
      return (friend)? friend.profileImg : null;
    },

    time() {
      return moment(this.friendship.createdAt).fromNow();
    },

    friendName() {
      return (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
      this.friendship.recipient.name :
      this.friendship.sender.name ;
    },

    friendUrl() {
      const url = (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
      this.friendship.recipient.userId :
      this.friendship.sender.userId ;
      return `/user/${url}`
    },
  },

  methods: {
    toggleShowChat() {
      this.showChat = !this.showChat;
    }
  },

  components: {
    ChatRoom
  }
}

</script>

<style lang="scss">
.friend-preview {
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
      max-width: 200px;
      border-radius: 50%;
    }
}
</style>




