<template>
    <div class="user-profile">
        <h1>User Profile</h1>

        <img src="http://placehold.it/100x100"/>
        <p>this is general info</p>
        <div class="actions">
            <router-link to="/profile/edit">Edit General Info</router-link> | 
            <router-link to="/trip">Trips</router-link> | 
            <router-link to="/match">Matches</router-link>
            <!-- | <router-link to="/gallery">Gallery</router-link>         -->
        </div>
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

<style lang="scss">
.user-profile {
    text-align: center;

    img {
        border-radius: 50%;
    }
}



</style>