import tripService from '../services/TripService.js'

export default {
    state: {
        trips: [],
        filterBy: {
            name: '',
            city: '',
            contry: '',
            fromBudget: null,
            toBudget: null,
            isDone: null,
        },
        currtrip: null,
    },
    mutations: {
        setTrips(state, { trips }) {
            state.trips = trips;
        },

        setFilter(state, payload) {
            state.filterBy = payload;
        },

        setCurrTrip(state, payload) {
            tripService.gettripById(payload)
                .then(trip => {
                    state.currtrip = trip
                })
        },
        saveEdit(state, { addedtrip }) {
            var idx = state.trips.findIndex(trip => {
                return trip._id === addedtrip._id
            })
            if (idx === -1) {
                state.trips.unshift(addedtrip);
            } else if (addedtrip._id) state.trips.splice(idx, 1, addedtrip);
        },
        deleteTrip(state, { tripId }) {
            const idx = state.trips.findIndex(trip => trip._id === tripId)
            state.trips.splice(idx, 1);
        },

    },
    getters: {
        trips(state) {
            return state.trips;
        },

        tripById: state => id => {
            return state.trips.find(trip => trip._id === id);
        },
    },

    actions: {
        loadTrips(context) {
            return tripService.query()
                .then(trips => {
                    context.commit({ type: 'setTrips', trips })
                })
        },
        deleteTrip(context, { trip }) {
            return tripService.deletetrip(trip._id)
                .then(() => {
                    context.commit({ type: 'deleteTrip', tripId: trip._id })
                })
        },
        saveTrip(context, { trip }) {
            return tripService.createtrip(trip)
                .then(addedtrip => {
                    context.commit({ type: 'saveEdit', addedtrip })
                    return addedtrip
                })

        },
    }
}