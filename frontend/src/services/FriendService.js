import HttpService from './HttpService';

export default {
    query,
    getById,
    update,
    remove,
    getFriends,
    getRequests,
    sendRequest,
    approveRequest,
    getRequestsSent
}

function query() {
    return HttpService.ajax('friend/')
    .then(friends => {
        return friends;
    })
}

function getFriends() {
    return HttpService.ajax(`friend/friends/byuser/`)
    .then(friends => {
        return friends;
    })
}

function getRequests() {
    return HttpService.ajax(`friend/requests/byuser/`)
    .then(requests => {
        return requests;
    })
}

function getRequestsSent() {
    return HttpService.ajax(`friend/sent/byuser/`)
    .then(requestsSent => {
        return requestsSent;
    })
}

function getById(friendId) {
    return HttpService.ajax(`friend/${friendId}`);
}

function update(friend) {
    return HttpService.ajax(`friend/${friend._id}`, 'put', friend);
}

function remove(friendId) {
    return HttpService.ajax(`friend/${friendId}`, 'delete'); 
}

function sendRequest(request) {
    return HttpService.ajax('friend/', 'post', request)
    .then(() => {
        return request;
    })
    .catch((err) => {
        console.log(err);
    })
}

function approveRequest(requestId) {
    return HttpService.ajax(`friend/request/${requestId}`, 'put')
    .then((newFriendship) => {
        return newFriendship;
    })
    .catch((err) => {
        console.log(err);
    })
}
