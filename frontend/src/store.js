import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import FriendStore from './modules/FriendStore'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
  },

  getters: {
    
  },
  
  modules: {
    UserStore,
    FriendStore
  }

})