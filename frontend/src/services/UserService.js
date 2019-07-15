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

function query(filterBy) {
    return HttpService.ajax('user', 'get', filterBy)
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

