import FriendService from '../services/FriendService';
import socket from '../services/SocketService.js';

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

        convertRequestToFriendship(state, {newFriendship}) {
            const requestIdx = state.requests.findIndex(request => request._id === newFriendship._id);
            if (requestIdx) {
                state.requests.splice(requestIdx, 1);
            } 
            
            state.friends.unshift(newFriendship);
        },

        addRequest(state, {newRequest}) {
            state.requests.push(newRequest);
        }
    },

    actions: {
        async loadFriends(context) {
            const friends = await FriendService.getFriends();
            context.commit({ type: 'setFriends', friends });
            return friends;
        },

        async loadRequests(context) {
            const requests = await FriendService.getRequests();
            context.commit({ type: 'setRequests', requests });
            return requests;
        },

        async loadRequestsSent(context) {
            const requestsSent = await FriendService.getRequestsSent();
            context.commit({ type: 'setRequestsSent', requestsSent });
            return requestsSent;
        },

        loadFriendships(context) {
            context.dispatch({type: 'loadFriends'});
            context.dispatch({type: 'loadRequests'});
            return context.dispatch({type: 'loadRequestsSent'});    
        },

        async deleteFriend(context, { friendId }) {
            await FriendService.remove(friendId);
            context.commit({ type: 'removeFriend', friendId });
            return {};
        },

        async updateFriend(context, { friend }) {
            const updatedFriend = await FriendService.update(friend);
            console.log('updated friend at store', updatedFriend);
            context.commit({ type: 'updateFriend', friend: updatedFriend })
            return updatedFriend;
        },

        async sendRequest(context, {request}) {
            const newRequest = await FriendService.sendRequest(request);
            context.commit({type: 'addRequest', newRequest});
            socket.emit('send notification', {type: "request", sender: request.sender, recipient: request.recipient, loggedUser: context.getters.loggedInUser._id});
            context.dispatch({type: 'loadFriendships'});
            return newRequest;
        },

        async approveRequest(context, {requestId}) {
            const newFriendship = await FriendService.approveRequest(requestId);
            context.commit({type: 'convertRequestToFriendship', newFriendship});
            socket.emit('send notification', {type: "friendship", sender: newFriendship.sender, recipient: newFriendship.recipient, loggedUser: context.getters.loggedInUser._id});
            context.dispatch({type: 'loadFriendships'});
            return newFriendship;
        },

        async loadFriendshipById(context, {friendshipId}) {
            const friendship = await FriendService.getById(friendshipId);
            return friendship;
        }
    }
}

