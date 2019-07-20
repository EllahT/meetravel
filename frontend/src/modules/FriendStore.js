import FriendService from '../services/FriendService.js'

export default {
    strict: true,

    state: {
        friends: [],
        requests: [],
        requestsSent: []
    },

    getters: {
        friends(state) {
            return state.friends;
        },

        requests(state) {
            return state.requests;
        },

        friendshipById: state => id => {
            return state.friends.find(friendship => friendship._id === id);
        },

        isFriendById: state => id => {
            return  state.friends.find(friendship => (friendship.status === 'approved' && (friendship.sender.userId === id || friendship.recipient.userId === id)));
        },

        isRequestedById: state => id => {
            return  state.requests.find(request => (request.status === 'pending' && request.sender.userId === id));
        },

        isRequesterById: state => id => {
            return  state.requestsSent.find(request => (request.status === 'pending' && request.recipient.userId === id));
        },
    },

    mutations: {
        setFriends(state, { friends }) {
            state.friends = friends;
        },

        setRequests(state, { requests }) {
            state.requests = requests;
        },

        setRequestsSent(state, { requestsSent }) {
            state.requestsSent = requestsSent;
        },

        updateFriend(state, { updatedFriend }) {
            const idx = state.friends.findIndex(friend => friend._id === updatedFriend._id);
            state.friends.splice(idx, 1, updatedFriend);
        },

        removeFriend(state, { friendId }) {
            const idx = state.friends.findIndex(friend => friend._id === friendId);
            state.friends.splice(idx, 1);
        },

        convertRequestToFriendship(state, {newFriend}) {
            const requestIdx = state.requests.findIndex(request => request._id === newFriend._id)
            if (requestIdx) {
                state.requests.splice(requestIdx, 1);
            } 
            
            state.friends.unshift(newFriend);
        },

        addRequest(state, {newRequest}) {
            state.requests.push(newRequest);
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

        loadRequestsSent(context) {
            return FriendService.getRequestsSent(context.getters.loggedInUser._id)
                .then(requestsSent => {
                    context.commit({ type: 'setRequestsSent', requestsSent });
                    return requestsSent;
                });
        },

        loadFrienships(context) {
            context.dispatch({type: 'loadFriends'});
            context.dispatch({type: 'loadRequests'});
            context.dispatch({type: 'loadRequestsSent'});
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
            return FriendService.sendRequest(request)
            .then(newRequest => {
                context.commit({type: 'addRequest', newRequest})
            })
        },

        approveRequest(context, {requestId}) {
            FriendService.approveRequest(requestId)
            .then(newFriendship => {
                context.commit({type: 'convertRequestToFriendship', newFriendship})
            })
        },

        loadFriendshipById(context, {friendshipId}) {
            return FriendService.getById(friendshipId)
            .then(friendship => {
                return friendship;
            })
        }
    }
}

