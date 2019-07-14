import HttpService from './HttpService';
import UtilService from './UtilService';

let loggedUser = null;

var MATCHES_DB = [];

export default {
    query,
    getById,
    add,
    update,
    remove,
    login,
    logout,
    getLoggedUser,
}

function query() {
    // return HttpService.ajax('user/'); //for real backend DB
    return Promise.resolve(MATCHES_DB);
}

function getById(userId) {
    // return HttpService.ajax(`user/${userId}`); //for real backend DB
    var user = MATCHES_DB.find(user => user._id = userId)
    if (user) return Promise.resolve(user)
    else return Promise.resolve('unknown user')
}

function add(user) {
    // return HttpService.ajax('user', 'post', user); //for real backend DB
    user._id = UtilService.makeId();
    MATCHES_DB.unshift(user)
    return Promise.resolve(user)
}

function update(user) {
    // return HttpService.ajax(`user/${user._id}`, 'put', user);   //for real backend DB
    var userIdx = MATCHES_DB.find(currUser => currUser._id = user._id)
    MATCHES_DB.splice(userIdx, 1, user)
    return Promise.resolve(user)
}

function remove(userId) {
    // return HttpService.ajax(`user/${userId}`, 'delete'); //for real backend DB
    var userIdx = MATCHES_DB.findIndex(user => user._id === userId);
    MATCHES_DB.splice(userIdx, 1)
    return Promise.resolve();
}

function login(email) {
    return HttpService.ajax(`user/login`, 'post', { email });
}

function logout() {
    return HttpService.ajax('user/logout', 'post');
}

function getLoggedUser() {
    // return HttpService.ajax('user/logged');
    return loggedUser;
}

MATCHES_DB = [{
        "_id": 100,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "-78.060723",
            "lng": "-85.700053"
        },
        "createdAt": "Friday, July 1, 2016 5:33 AM",
        "members": [{
                "_id": 781
            },
            {
                "_id": 106
            }
        ]
    },
    {
        "_id": 101,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "51.788359",
            "lng": "9.349955"
        },
        "createdAt": "Wednesday, December 2, 2015 3:10 AM",
        "members": [{
                "_id": 945
            },
            {
                "_id": 405
            }
        ]
    },
    {
        "_id": 102,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "-86.020019",
            "lng": "25.466054"
        },
        "createdAt": "Tuesday, February 5, 2019 10:49 PM",
        "members": [{
                "_id": 995
            },
            {
                "_id": 402
            }
        ]
    },
    {
        "_id": 103,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "3.678643",
            "lng": "33.019305"
        },
        "createdAt": "Tuesday, December 12, 2017 4:41 AM",
        "members": [{
                "_id": 859
            },
            {
                "_id": 929
            }
        ]
    },
    {
        "_id": 104,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "5.792276",
            "lng": "83.848637"
        },
        "createdAt": "Friday, February 14, 2014 8:17 PM",
        "members": [{
                "_id": 932
            },
            {
                "_id": 984
            }
        ]
    },
    {
        "_id": 105,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "22.052672",
            "lng": "-15.929825"
        },
        "createdAt": "Monday, May 25, 2015 1:52 AM",
        "members": [{
                "_id": 157
            },
            {
                "_id": 694
            }
        ]
    },
    {
        "_id": 106,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "-60.899499",
            "lng": "108.220328"
        },
        "createdAt": "Thursday, October 26, 2017 5:37 AM",
        "members": [{
                "_id": 472
            },
            {
                "_id": 663
            }
        ]
    },
    {
        "_id": 107,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "-42.049786",
            "lng": "-125.960635"
        },
        "createdAt": "Monday, March 25, 2019 7:10 AM",
        "members": [{
                "_id": 409
            },
            {
                "_id": 304
            }
        ]
    },
    {
        "_id": 108,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "-21.299562",
            "lng": "-125.849591"
        },
        "createdAt": "Friday, July 21, 2017 3:23 PM",
        "members": [{
                "_id": 836
            },
            {
                "_id": 968
            }
        ]
    },
    {
        "_id": 109,
        "image": "http://placehold.it/32x32",
        "location": {
            "lat": "-37.940831",
            "lng": "150.459418"
        },
        "createdAt": "Sunday, February 2, 2014 8:30 PM",
        "members": [{
                "_id": 658
            },
            {
                "_id": 604
            }
        ]
    }
]