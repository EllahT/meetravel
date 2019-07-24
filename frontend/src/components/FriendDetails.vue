<template>
    <div v-if="friendship">
        <chat-room :friendshipId="friendship._id" :history="friendship.messages">
        </chat-room>
    </div>
</template>

<script>
    import ChatRoom from '@/components/ChatRoom.vue'

    export default {
        data() {
            return {
                friendship: null
            }
        },

        async created() {
            const friendshipId = this.$route.params.friendshipId;      
            const friendship = await this.$store.dispatch({type: 'loadFriendshipById', friendshipId})
            if (friendship) this.friendship = JSON.parse(JSON.stringify(friendship));
            else this.$router.push('/inbox');
        },

        computed: {      
            friendName() {
            return (this.$store.getters.loggedInUser._id.includes(this.friendship.sender.userId))? 
            this.friendship.recipient.name :
            this.friendship.sender.name ;
            },
        },

        components: {
            ChatRoom,
        }
    }
</script>