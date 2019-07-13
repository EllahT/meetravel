import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import TripStore from './modules/TripStore'
import MatchStore from './modules/MatchStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genders: [{type: 'woman', display: '👩 Woman'}, {type: 'man', display: '👨 Man'}, {type: 'other', display: 'Other'}],
  },

    getters: {
      genderTypes(state) {
        return state.genders;
      },
  
      gendersToFilter(state) {
        const filterGenders = [...state.genders];
        filterGenders.unshift({type: 'all', display: 'All'});
        return filterGenders;
      }
    },
  
    modules: {
        UserStore,
        MatchStore,
        TripStore
    }

})