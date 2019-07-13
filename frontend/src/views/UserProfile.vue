<template>
    <div class="user-profile">
        <h1>User Profile</h1>
        <router-link to="/profile/edit">Edit Profile</router-link> | 
        <router-link to="/trip">Trips</router-link> | 
        <router-link to="/matchs">Matchs</router-link>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        }
    },

    created() {
        this.user = this.$store.getters.loggedInUser;
    }
}
</script>