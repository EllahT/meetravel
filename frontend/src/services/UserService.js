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

function login(userCred) { // TODO: add try and catch
    console.log('user cred at User Service:', userCred)
    const res = HttpService.ajax('auth/login', 'post', userCred)
        .then(res => console.log('login at front user service after promise :', res))
    return res
}

function signup(userCred) {
    // console.log('userCred at front user-service', userCred);
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