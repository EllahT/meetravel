import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStrore'
import TripStore from './modules/TripStore'
import MatchStore from './modules/MatchStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genders: [{type: 'f', display: '👩 Woman'}, {type: 'm', display: '👨 Man'}, {type: 'o', display: 'Other'}]
  },

  getters: {
    genderTypes(state) {
      return state.genders;
    },

    gendersToFilter(state) {
      const filterGenders = [...state.genders];
      filterGenders.unshift({type: 'a', display: 'All'});
      return filterGenders;
    }
  },

  mutations: {
    
  },

  actions: {
    
  
  },

  modules: {
    UserStore,
    MatchStore,
    TripStore


  }

})
