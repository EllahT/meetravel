import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import TripStore from './modules/TripStore'
import FriendStore from './modules/FriendStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },

  getters: {
    
  },
  
  modules: {
    UserStore,
    FriendStore,
    TripStore
  }

})