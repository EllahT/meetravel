<template>
  <div class="chat-box">
      <header>
        <img v-if="chatInfo.friendImg" :src="chatInfo.friendImg"/><h3>{{chatInfo.friendName}}</h3><button @click="emitCloseChat">&times</button></h3>
      </header>
    <div class="chat-body">
      <ul ref="msgsList" class="chat-area">
        <li v-for="(message, i) in messages" :key="i" class="message" 
        :class="{'message-out': message.from === user, 'message-in': message.from !== user}">{{message.txt}}</li>
      </ul>
    </div>
    <div class="input-container">
        <input class="input-msg" type="text" v-model="txt" @keydown.enter="sendMessage" placeholder="Write your message..." autofocus/>
        <button class="material-icons" @click="sendMessage">send</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      txt: "",
      messages: [],
      socket: io('localhost:3000')
    };
  },

  props: ['chatInfo'],

  created() {
    this.chatInfo.history.forEach(msg => {
      this.messages.push(msg);
    })

    this.socket.emit('chat join', {user: this.user, friendshipId: this.chatInfo.friendshipId});
    
    this.socket.on('chat newMsg', (msg)=>{
        this.messages.push(msg);
        setTimeout(() => {
            if (this.$refs.msgsList) {
                this.$refs.msgsList.scrollTo({top: this.$refs.msgsList.scrollHeight, behavior: 'smooth'});
            }
        }, 20);
    });
  },

  computed: {
      user() {
          return this.$store.getters.loggedInUser.username;
      },
  },

  methods: {
    sendMessage() {
        const msg = {from: this.user, txt: this.txt};
        this.socket.emit('chat msg', {msg, friendshipId: this.chatInfo.friendshipId});
        this.txt = "";
    },

    emitCloseChat() {
      this.$emit('close');
    }
  },

  destroyed() {
    this.messages = [];
  }
};
</script>

<style scoped lang="scss">
.chat-box {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  background-color: #fafcfc;
  border-radius: 8px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);
  width: 400px;

  header {
    background-color: #407FFF;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 10px;
    color: #52524e;
    
      img {
        max-width: 50px;
        max-height: 50px;
        margin: 0 10px;
        }
    
      button {
        position: absolute;
        top: 5px;
        right: 5px;
      }    
  }

  header:hover {
    color: #52524e;
  }
  
  .chat-body {
    margin: 0 auto 2em auto;
    height: 420px;
    overflow: hidden;
    overflow-y: scroll;
    
    .chat-area {
      padding: 2em;
      padding-top: 2.5em;      
      list-style: none;
      padding-bottom: 2.5em;
      position: absolute;
      bottom: 0;
      width: 100%;

      .message {
        width: 45%;
        border-radius: 10px;
        padding: 0.8em;
        margin-bottom: .5em;
        font-size: 1em;
        overflow: visible;
        white-space: initial; 
      }

      .message-out {
        background: #407FFF;
        color: white;
        margin-left: 50%;
      }

      .message-in {
        background: #F1F0F0;
        color: black;
      }
    }
  }

  .input-container {
        display: flex;
        width: 100%;
        background-color: #fafcfc;
        bottom: 0;

        .input-msg {
          padding: 10px;
          margin: 10px;
          margin-right: 0;
          flex-grow: 1;
          outline: none;
        }

        button {
          outline: none;

        }
      }
}
</style>

