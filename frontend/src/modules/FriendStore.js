import FriendService from '../services/FriendService.js'

export default {
    strict: true,

    state: {
        friends: [],
        requests: [],
        allFriends: []
    },

    getters: {
        friends(state) {
            return state.friends;
        },

        requests(state) {
            return state.requests;
        },

        friendshipById: state => id => {
            return state.friends.find(friends => friends._id === id);
        },
    },

    mutations: {
        setFriends(state, { friends }) {
            state.friends = friends;
        },

        setRequests(state, { requests }) {
            state.requests = requests;
        },

        setAllFriends(state, { allFriends }) {
            state.allFriends = allFriends;
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

        convertRequestToFriendship(state, {newFriend}) {
            const requestIdx = state.requests.findIndex(request => request._id === newFriend._id)
            state.requests.splice(requestIdx, 1);
            state.friends.unshift(newFriend);
            console.log(state.requests);
        }
    },

    actions: {
        loadFriends(context) {
            return FriendService.getFriends(context.getters.loggedInUser._id)
                .then(friends => {
                    context.commit({ type: 'setFriends', friends });
                    return friends;
                });
        },

        loadRequests(context) {
            return FriendService.getRequests(context.getters.loggedInUser._id)
                .then(requests => {
                    context.commit({ type: 'setRequests', requests });
                    return requests;
                });
        },

        loadAllFriendships(context) {
            return FriendService.query()
            .then(allFriends => {
                context.commit({type: 'setallFriends', allFriends});
                return allFriends;
            })
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

        sendRequest(context, {request}) {
            FriendService.sendRequest(request)
            .then((newRequest) => {
                return newRequest;
            })
        },

        approveRequest(context, {requestId}) {
            FriendService.approveRequest(requestId)
            .then(newFriend => {
                context.commit({type: 'convertRequestToFriendship', newFriend})
            })
        }
    }
}

