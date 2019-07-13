<template>
    <div class="user-profile">
        <h1>User Profile</h1>
        <router-link to="/profile/edit">Edit Profile</router-link>
        <router-link to="/trip/edit">Add a Trip</router-link>
        <trip-list :trips ="trips"></trip-list>
    </div>
</template>

<script>
import TripList from '@/components/TripList.vue'

// REMOVE FROM HERE!
import TripService from '../services/TripService'

export default {
    data() {
        return {
            user: null,
            trips: [] // REMOVE FROM HERE!
        }
    },

    created() {
        this.user = this.$store.getters.loggedInUser;
        TripService.query().then(trips => this.trips = trips) // REMOVE FROM HERE!
    },

    components: {
        TripList
    }
}
</script>