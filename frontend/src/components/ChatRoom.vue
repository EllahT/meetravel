<template>
  <div class="toy-chat-box">
    <header>
      <slot name="box-header"></slot>
    </header>
    <slot></slot>
    <div>
      <ul ref="msgsList">
        <li v-for="(chat, i) in chats" :key="i">{{chat.from}}: {{chat.txt}}</li>
      </ul>
      <input type="text" v-model="txt" @change="sendMsg" />
    </div>
    <footer>
      <slot name="box-footer"></slot>
    </footer>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      txt: "",
      chats: [],
      socket: io('localhost:3000')
    };
  },

  props: ['matchId'],

  created() {
    this.socket.emit('chat join', {user: this.user, matchId: this.matchId});
    this.socket.on('chat newMsg', (msg)=>{
        this.chats.push(msg);
        setTimeout(() => {
            if (this.$refs.msgsList) {
                this.$refs.msgsList.scrollTo({top: this.$refs.msgsList.scrollHeight, behavior: 'smooth'});
            }
        }, 20);
        
    });
    this.socket.on('chat history', (msgs) =>{
        msgs.forEach(msg => {
            this.chats.push(msg);
        });
    });
  },

  computed: {
      user() {
          return this.$store.getters.loggedInUser.name;
      }
  },

  methods: {
    sendMsg() {
        const msg = {from: this.user, txt: this.txt};
        this.socket.emit('chat msg', msg);
        this.txt = "";
    }
  },

  destroyed() {
    this.chats = [];
  }
};
</script>

<style scoped lang="scss">
.toy-chat-box {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 15px;
  background-color: #fafcfc;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);
 
  ul {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 0;
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    flex-wrap: nowrap;

    li {
      text-align: start;
      width: 250px;
      padding: 5px;
      word-wrap: break-word;
    }

    li:nth-child(odd) {
      background-color: lightgray;
    }

    li:nth-child(even) {
      background-color: lightpink;
    }
  }

  img {
    max-height: 20px;
    margin: 0;
    padding: 0;
  }
}
</style>


