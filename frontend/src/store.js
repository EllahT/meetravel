import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import TripStore from './modules/TripStore'
import MatchStore from './modules/MatchStore'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },

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