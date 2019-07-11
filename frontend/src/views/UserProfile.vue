<template>
    <div class="user-profile">
        <h1>User Profile</h1>
        <router-link to="/profile/edit">Edit Profile</router-link>
        <trip-list :trip ="user.trips"></trip-list>
    </div>
</template>

<script>
import TripList from '@/components/TripList.vue'

export default {
    data() {
        return {
            user: null,
        }
    },

    created() {
        this.user = this.$store.getters.loggedInUser;
    },

    components: {
        TripList
    }
}
</script>