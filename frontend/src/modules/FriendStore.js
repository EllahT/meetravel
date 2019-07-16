import FriendService from '../services/FriendService.js'

export default {
    strict: true,

    state: {
        friends: []
    },

    getters: {
        friends(state) {
            return state.friends;
        },

        friendshipById: state => id => {
            return state.friends.find(friends => friends._id === id);
        },
    },

    mutations: {
        setFriends(state, { friends }) {
            state.friends = friends;
        },

        updateFriend(state, { updatedFriend }) {
            const idx = state.friends.findIndex(friend => friend._id === updatedFriend._id);
            state.friends.splice(idx, 1, updatedFriend);
        },

        addFriend(state, { addedFriend }) {
            state.friends.push(addedFriend);
        },

        removeFriend(state, { friendId }) {
            const idx = state.friends.findIndex(friend => friend._id === friendId);
            state.friends.splice(idx, 1);
        },
    },

    actions: {
        loadFriends(context) {
            return FriendService.getByUser(context.getters.loggedInUser._id)
                .then(friends => {
                    context.commit({ type: "setFriends", friends });
                    return friends;
                });
        },

        addFriend(context, { friend }) {
            return FriendService.add(friend)
                .then((addedFriend) => {
                    context.commit({ type: 'addFriend', addedFriend });
                    return addedFriend;
                })
        },

        deleteFriend(context, { friendId }) {
            return FriendService.remove(friendId).then(() => {
                context.commit({ type: 'removeFriend', friendId });
                return {};
            })
        },

        updateFriend(context, { friend }) {
            return FriendService.update(friend)
                .then(updatedFriend => {
                    console.log('updated friend at store', updatedFriend);
                    context.commit({ type: 'updateFriend', friend: updatedFriend })
                    return updatedFriend;
                })
        },


    }
}

