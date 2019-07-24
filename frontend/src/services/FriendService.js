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

async function query() {
    try {
        return await HttpService.ajax('friend/');
    }
    catch(err) {
        console.log(err);
    }
}

async function getFriends() {
    try {
        return await HttpService.ajax(`friend/friends/byuser/`);
    }
    catch(err) {
        console.log(err);
    }
}

async function getRequests() {
    try {
        return await HttpService.ajax(`friend/requests/byuser/`);
    }
    catch(err) {
        console.log(err);
    }
}

async function getRequestsSent() {
    try {
        return await HttpService.ajax(`friend/sent/byuser/`);
    }
    catch(err) {
        console.log(err);
    }
}

async function getById(friendId) {
    try {
        return await HttpService.ajax(`friend/${friendId}`);
    }
    catch(err) {
        console.log(err);
    }
}

async function update(friend) {
    try {
        return await HttpService.ajax(`friend/${friend._id}`, 'put', friend);
    }
    catch(err) {
        console.log(err);
    }
}

async function remove(friendId) {
    try {
        return await HttpService.ajax(`friend/${friendId}`, 'delete'); 
    }
    catch(err) {
        console.log(err);
    }
}

async function sendRequest(request) {
    try {
        return await HttpService.ajax('friend/', 'post', request);
    }
    catch(err) {
        console.log(err);
    }
}

async function approveRequest(requestId) {
    try {
        return await HttpService.ajax(`friend/request/${requestId}`, 'put');
    }
    catch(err) {
        console.log(err);
    }
}
