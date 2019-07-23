import HttpService from './HttpService';

export default {
    query,
    getById,
    signup,
    update,
    remove,
    login,
    logout,
    getLoggedUser,
}

async function query(filterBy, location) {
    filterBy.currLat = location.lat;
    filterBy.currLng = location.lng;
    try {
        return await HttpService.ajax(`user${_getQueryString(filterBy)}`);
    }
    catch(err) {
        console.log(err);
    }
}

async function getById(userId) {
    try {
        return await HttpService.ajax(`user/${userId}`);
    }
    catch(err) {
        console.log(err);
    }
}

async function update(user) {
    try {
        return await HttpService.ajax(`user/${user._id}`, 'put', user);
    }
    catch(err) {
        console.log(err);
    }
}

async function remove(userId) {
    try {
        return await HttpService.ajax(`user/${userId}`, 'delete');
    }
    catch(err) {
        console.log(err);
    }
}

async function login(userCred) { 
    try {
        return await HttpService.ajax('auth/login', 'post', userCred);
    }
    catch(err) {
        console.log(err);
    }
}

async function signup(userCred) {
    try {
        return await HttpService.ajax('auth/signup', 'post', userCred);
    }
    catch(err) {
        console.log(err);
    }
}

async function logout() {
    try {
        return await HttpService.ajax('auth/logout', 'post');
    }
    catch(err) {
        console.log(err);
    }
}

async function getLoggedUser() {
    try {
        return await HttpService.ajax('auth/');
    }
    catch(err) {
        console.log(err);
    }
}

function _getQueryString(filterBy) {
    if (!filterBy) return;
    var queryStrings = Object.entries(filterBy).map(entry => {
        return `${entry[0]}=${entry[1]}&`;
    })

    queryStrings.unshift('?');
    return queryStrings.join('');
}