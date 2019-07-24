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
import socketService from '@/services/SocketService';

export default {
  data() {
    return {
      txt: "",
      messages: [],
      socket: null
    };
  },

  props: ['chatInfo'],

  created() {
    this.socket = socketService.socket;
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
  position: fixed;
  bottom: 35px;
  right: 20px;
  margin: 0;
  background-color: #fafcfc;
  border-radius: 8px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);
  width: 100vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;

  header {
    background-color: #407FFF;
    display: flex;
    justify-content: center;
    padding: 10px;
    color: #52524e;
    
      img {
        max-width: 50px;
        max-height: 50px;
        margin: 0 10px;
      }
    
      h3 {
        flex-grow: 1;
      }

      button {
        font-size: 1.5em;
      }    
  }

  header:hover {
    color: #52524e;
  }
  
  .chat-body {
    height: 420px;
    overflow-y: scroll;

    .chat-area {
      list-style: none;
      padding: 20px;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: flex-end;

      .message {
        max-width: 50%;
        border-radius: 10px;
        padding: 0.8em;
        margin-bottom: .5em;
        font-size: 1em;
      }

      .message-out {
        background: #407FFF;
        color: white;
        align-self: flex-end;
        padding-left: 20px;
      }

      .message-in {
        background: #F1F0F0;
        color: black;
        padding-right: 10px;
      }
    }
  }
  
  .input-container {
    display: flex;
    width: 100%;
    background-color: #fafcfc;

    .input-msg {
      padding: 20px;
      flex-grow: 1;
      outline: none;
    }

    button {
       outline: none;
       padding-right: 10px;
    }
  }
}

@media (min-width: 780px) {
  .chat-box {
    min-width: 30vw;
    max-width: 400px;
  }
}
</style>

