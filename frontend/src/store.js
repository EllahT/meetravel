import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import TripStore from './modules/TripStore'
import MatchStore from './modules/MatchStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genders: [{type: 'f', display: '👩 Woman'}, {type: 'm', display: '👨 Man'}, {type: 'o', display: 'Other'}],
    location: {lat: null, lng: null, address: null}
  },

    mutations: {
      updateLocation(state, {location}) {
        state.location = location;
      }
    },

    actions: {
      updateCurrLocation(context, {location}) {
        context.commit({type: 'updateLocation', location})
      }
    },

    getters: {
      genderTypes(state) {
        return state.genders;
      },

      currLocation(state) {
        return state.location;
      },
  
      gendersToFilter(state) {
        const filterGenders = [...state.genders];
        filterGenders.unshift({type: 'a', display: 'All'});
        return filterGenders;
      },

      location(state) {
        return state.location;
      }
    },
  

    modules: {
        UserStore,
        MatchStore,
        TripStore


    }

})