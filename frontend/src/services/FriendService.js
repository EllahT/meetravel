import HttpService from './HttpService';
import UtilService from './UtilService';

export default {
    query,
    getById,
    add,
    update,
    remove,
    getByUser
}

function query() {
    return HttpService.ajax('friend/')
    .then(friends => {
        return friends;
    })
}

function getByUser(userId) {
    return HttpService.ajax(`friend/byuser/${userId}`)
    .then(friends => {
        return friends;
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

function add(friend) {
    return HttpService.ajax('friend/', 'post', friend);
}
