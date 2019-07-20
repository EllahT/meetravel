<template>
    <div v-if="friendship">
        <chat-room :friendshipId="friendship._id" :history="friendship.messages">
        <h1 slot="box-header">Chat With {{friendName}}</h1>
        <div></div>
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

        created() {
            const friendshipId = this.$route.params.friendshipId;      
            this.$store.dispatch({type: 'loadFriendshipById', friendshipId})
            .then ((friendship) => {
                if (friendship) this.friendship = JSON.parse(JSON.stringify(friendship));
                else this.$router.push('/inbox');
            })
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