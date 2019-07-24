import FriendService from '../services/FriendService';
import socket from '../services/SocketService.js';

export default {
    strict: true,

    state: {
        friendships: [],
        requests: [],
        requestsSent: []
    },

    getters: {
        friendships(state) {
            return state.friendships;
        },

        requests(state) {
            return state.requests;
        },

        friendshipById: state => id => {
            return state.friendships.find(friendship => friendship._id === id);
        },

        isFriendById: state => id => {
            return  state.friendships.find(friendship => (friendship.status === 'approved' && (friendship.sender.userId === id || friendship.recipient.userId === id)));
        },

        isRequestedById: state => id => {
            return  state.requests.find(request => (request.status === 'pending' && request.sender.userId === id));
        },

        isRequesterById: state => id => {
            return  state.requestsSent.find(request => (request.status === 'pending' && request.recipient.userId === id));
        },
    },

    mutations: {
        setFriendships(state, { friendships }) {
            state.friendships = friendships;
        },

        setRequests(state, { requests }) {
            state.requests = requests;
        },

        setRequestsSent(state, { requestsSent }) {
            state.requestsSent = requestsSent;
        },

        updateFriendship(state, { updatedFriendship }) {
            const idx = state.friendships.findIndex(friendship => friendship._id === updatedFriendship._id);
            state.friendship.splice(idx, 1, updatedFriendship);
        },

        removeFriendship(state, { friendshipId }) {
            const idx = state.friendships.findIndex(friendship => friendship._id === friendshipId);
            state.friendships.splice(idx, 1);
        },

        convertRequestToFriendship(state, {newFriendship}) {
            const requestIdx = state.requests.findIndex(request => request._id === newFriendship._id);
            if (requestIdx) {
                state.requests.splice(requestIdx, 1);
            } 
            
            state.friendships.unshift(newFriendship);
        },

        addRequest(state, {newRequest}) {
            state.requests.push(newRequest);
        }
    },

    actions: {
        async loadFriends(context) {
            const friendships = await FriendService.getFriends();
            context.commit({ type: 'setFriendships', friendships });
            return friendships;
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

        async updateFriendship(context, { friendship }) {
            const updatedFriendship = await FriendService.update(friendship);
            context.commit({ type: 'updateFriendship', friend: updatedFriendship })
            return updatedFriendship;
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

