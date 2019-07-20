import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import FriendStore from './modules/FriendStore'
import SocketStore from './modules/SocketStore'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
  },

  getters: {
    
  },
  
  modules: {
    UserStore,
    FriendStore,
    SocketStore
  }

})