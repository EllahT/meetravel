import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import TripStore from './modules/TripStore'
import MatchStore from './modules/MatchStore'

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
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
=======
    state: {

    },
>>>>>>> users

    getters: {

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