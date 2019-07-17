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

function query(filterBy, location) {
    filterBy.currLat = location.lat;
    filterBy.currLng = location.lng;
    return HttpService.ajax(`user${_getQueryString(filterBy)}`)
    .then(users => {
        return users;
    })
}

function getById(userId) {
    return HttpService.ajax(`user/${userId}`);
}

function update(user) {
    return HttpService.ajax(`user/${user._id}`, 'put', user);
}

function remove(userId) {
    return HttpService.ajax(`user/${userId}`, 'delete'); 
}

function login(userCred) {
    return HttpService.ajax('auth/login', 'post', userCred);
}

function signup(userCred) {
    return HttpService.ajax('auth/signup', 'post', userCred);
}

function logout() {
    return HttpService.ajax('auth/logout', 'post');
}

function getLoggedUser() {
    return HttpService.ajax('user/logged');
}


function _getQueryString(filterBy) {
    if (!filterBy) return;
    var queryStrings = Object.entries(filterBy).map(entry => {
        return `${entry[0]}=${entry[1]}&`;
    })

    queryStrings.unshift('?');
    return queryStrings.join('');
}