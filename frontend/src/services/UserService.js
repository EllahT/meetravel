import HttpService from './HttpService';

var USERS_DB = []

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
    return Promise.resolve(USERS_DB);
}

function getById(userId) {
    // return HttpService.ajax(`user/${userId}`); //for real backend DB
    var user = USERS_DB.find(user => user._id = userId)
    if (user) return Promise.resolve(user)
    else return Promise.resolve('unknown user')
}

function add(user) {
    // return HttpService.ajax('user', 'post', user); //for real backend DB
    user._id = _makeId()
    USERS_DB.unshift(user)
    return Promise.resolve(user)
}

function update(user) {
    // return HttpService.ajax(`user/${user._id}`, 'put', user);   //for real backend DB
    var userIdx = USERS_DB.find(currUser => currUser._id = user._id)
    USERS_DB.splice(userIdx, 1, user)
    return Promise.resolve(user)
}

function remove(userId) {
    // return HttpService.ajax(`user/${userId}`, 'delete'); //for real backend DB
    var userIdx = USERS_DB.findIndex(user => user._id === userId);
    USERS_DB.splice(userIdx, 1)
    return Promise.resolve();
}

function login(email) {
    return HttpService.ajax(`user/login`, 'post', { email });
}

function logout() {
    return HttpService.ajax('user/logout', 'post');
}

function getLoggedUser() {
    return HttpService.ajax('user/logged');
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

USERS_DB = [{
        "_id": "5d275b31d4e499ccc0a640ae",
        "firstName": "Terri",
        "lastName": "Holman",
        "password": 100,
        "isAdmin": true,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1969,
        "description": "Ad quis dolor deserunt sit sint incididunt sit minim occaecat. Incididunt id in dolore ut laboris fugiat commodo fugiat ea labore dolor cupidatat. Minim incididunt proident ea proident minim labore ad Lorem consequat Lorem eiusmod anim tempor incididunt. Tempor tempor sunt labore pariatur enim reprehenderit. Magna anim ipsum duis laborum eu magna aliquip ut.",
        "registered": "Saturday, October 7, 2017 8:28 PM",
        "lastConnected": "Thursday, February 1, 2018 2:09 AM",
        "currLocation": {
            "lat": "-82.87981",
            "lng": "1.444387"
        },
        "residance": {
            "city": "Afula",
            "country": "Jordan"
        },
        "travelType": "sightseeing",
        "likes": [{
                "id": 0,
                "name": "Walters Hanson",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Petersen Ayala",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Anna Miranda",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31ecb5892e51080078",
        "firstName": "Coleen",
        "lastName": "May",
        "password": 101,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1949,
        "description": "Officia excepteur pariatur aliqua ea laborum occaecat. Ullamco et ullamco magna pariatur magna laboris incididunt. Labore consequat cupidatat cupidatat dolore incididunt sunt culpa Lorem. Reprehenderit do mollit in minim qui aute esse ad est. Commodo irure commodo velit qui ad est. Amet enim consectetur in laboris nostrud cupidatat deserunt ad do cupidatat qui occaecat. Magna ut exercitation est laborum voluptate fugiat in cupidatat veniam sint amet.",
        "registered": "Tuesday, October 28, 2014 3:20 AM",
        "lastConnected": "Saturday, October 29, 2016 10:14 PM",
        "currLocation": {
            "lat": "41.159176",
            "lng": "-179.119603"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Germany"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Shelia Burch",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rodriquez Wynn",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Booth Tyler",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b314e7a112026d04fff",
        "firstName": "Kirkland",
        "lastName": "Dennis",
        "password": 102,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1997,
        "description": "Esse commodo esse dolore Lorem id commodo amet. Veniam ullamco nostrud consequat aute consequat dolore deserunt excepteur sit minim sunt. Deserunt pariatur excepteur ad consequat labore ad amet sint et qui in voluptate. Reprehenderit incididunt ad laborum officia ut sunt pariatur sit anim pariatur nostrud incididunt dolore. Id adipisicing reprehenderit ad voluptate reprehenderit officia labore ullamco fugiat. Adipisicing aliquip nostrud cillum culpa veniam anim labore incididunt esse sit. Lorem ipsum non labore amet eu ipsum mollit reprehenderit dolore ad ipsum esse.",
        "registered": "Sunday, October 26, 2014 1:17 AM",
        "lastConnected": "Saturday, November 29, 2014 1:18 PM",
        "currLocation": {
            "lat": "-21.712615",
            "lng": "-53.815966"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Jordan"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "Woodard Le",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Burch Emerson",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Laura Washington",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31d2b37e10656e0aad",
        "firstName": "Rosa",
        "lastName": "Carson",
        "password": 103,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1951,
        "description": "Id eu id quis excepteur. Dolor culpa commodo aute enim dolor. Anim exercitation incididunt irure dolor consequat.",
        "registered": "Tuesday, December 15, 2015 10:53 PM",
        "lastConnected": "Wednesday, March 28, 2018 8:17 PM",
        "currLocation": {
            "lat": "60.406621",
            "lng": "87.27735"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Jeanne Madden",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Glover Hernandez",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Hazel Dejesus",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31593dc9d780525154",
        "firstName": "Foreman",
        "lastName": "Owens",
        "password": 104,
        "isAdmin": false,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1994,
        "description": "Eu sunt elit velit irure. Voluptate consequat non anim labore exercitation cillum sint nisi exercitation sit duis Lorem laboris officia. Fugiat amet enim labore incididunt nostrud et nulla dolor deserunt sit esse veniam. Exercitation consectetur proident laborum ad ut commodo exercitation deserunt tempor do ullamco. Reprehenderit id ex nisi est ut. Dolore occaecat fugiat fugiat voluptate occaecat. Eiusmod aute dolore fugiat adipisicing quis sunt labore fugiat dolor proident in.",
        "registered": "Wednesday, October 26, 2016 11:51 AM",
        "lastConnected": "Monday, June 20, 2016 6:15 AM",
        "currLocation": {
            "lat": "21.016425",
            "lng": "-15.452766"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Germany"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "Sadie Hendricks",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Hogan Merrill",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Randolph Cummings",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b318aede3733f684ee9",
        "firstName": "Kerry",
        "lastName": "Rice",
        "password": 105,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1971,
        "description": "Culpa aliquip anim commodo cupidatat consequat cillum qui ea laborum. Ea id reprehenderit sunt nulla. Voluptate consequat consectetur non excepteur reprehenderit. Dolor elit adipisicing incididunt nostrud enim quis officia deserunt cupidatat. Elit ipsum aliquip occaecat quis incididunt consectetur laboris. Incididunt cillum amet elit proident duis nostrud laboris consequat. Culpa ut aliquip sit officia velit.",
        "registered": "Wednesday, May 10, 2017 9:10 PM",
        "lastConnected": "Friday, February 22, 2019 3:59 PM",
        "currLocation": {
            "lat": "-86.041923",
            "lng": "-168.561944"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Jordan"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "English Levy",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Margo Mayer",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Bolton Petersen",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b316ae16808f304dafb",
        "firstName": "Hutchinson",
        "lastName": "Salazar",
        "password": 106,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1950,
        "description": "Exercitation consequat aliqua Lorem elit aliqua dolor. Consectetur laboris dolore voluptate tempor aliqua ipsum ut tempor dolor ipsum sint aliqua. Duis do velit nisi reprehenderit qui nulla. Dolor ullamco irure ut quis eiusmod fugiat irure veniam eu consequat cupidatat ea. Sint in elit culpa amet incididunt enim irure minim cillum nisi ex laboris enim. Consequat aute aliquip aute mollit occaecat do exercitation consectetur commodo amet culpa exercitation.",
        "registered": "Wednesday, June 7, 2017 2:59 AM",
        "lastConnected": "Saturday, July 30, 2016 9:42 AM",
        "currLocation": {
            "lat": "47.958245",
            "lng": "20.774728"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Germany"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "Edith Bowers",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Cruz Montgomery",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Delores Reese",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31c4baae607ae2670a",
        "firstName": "Chelsea",
        "lastName": "Burt",
        "password": 107,
        "isAdmin": false,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1959,
        "description": "Ea nostrud pariatur excepteur Lorem velit nisi velit nostrud. Ex ullamco enim eu aute tempor ipsum aliquip exercitation eu deserunt incididunt. Anim dolore tempor adipisicing nostrud. Magna incididunt aliqua ex enim duis velit sunt.",
        "registered": "Wednesday, September 5, 2018 5:56 AM",
        "lastConnected": "Sunday, May 29, 2016 9:49 PM",
        "currLocation": {
            "lat": "87.142238",
            "lng": "-84.202729"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "USA"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Lang Berg",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Roberson Ramsey",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Greta Cantrell",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31c8086ebf1a554038",
        "firstName": "Louisa",
        "lastName": "Frank",
        "password": 108,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1990,
        "description": "Cillum deserunt eiusmod sit qui sunt aliquip laboris fugiat do pariatur aliqua velit voluptate culpa. Lorem ipsum mollit ut amet enim quis laboris commodo do deserunt deserunt laboris pariatur. Adipisicing reprehenderit Lorem minim et nostrud sunt sunt voluptate. Nulla ad aliquip veniam veniam culpa voluptate tempor nostrud non veniam anim tempor.",
        "registered": "Wednesday, August 27, 2014 1:19 AM",
        "lastConnected": "Tuesday, September 1, 2015 12:59 AM",
        "currLocation": {
            "lat": "-0.729066",
            "lng": "134.747028"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Germany"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Bernadette Adkins",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Snyder Bullock",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Spence Bush",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b314d04c7e7d6e3d577",
        "firstName": "Hopper",
        "lastName": "Ray",
        "password": 109,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1958,
        "description": "Dolore excepteur occaecat dolor sint anim aliquip aliqua. Veniam magna sint in qui anim fugiat. Ut in pariatur nostrud eu do veniam.",
        "registered": "Tuesday, July 3, 2018 8:06 PM",
        "lastConnected": "Friday, October 13, 2017 9:10 AM",
        "currLocation": {
            "lat": "-46.224534",
            "lng": "-25.761862"
        },
        "residance": {
            "city": "Afula",
            "country": "Germany"
        },
        "travelType": "sightseeing",
        "likes": [{
                "id": 0,
                "name": "Moreno Kirk",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rivera Barrera",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Frank Dominguez",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31ef0a3692a5c4e326",
        "firstName": "Angelita",
        "lastName": "Wade",
        "password": 110,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1982,
        "description": "Labore irure sit adipisicing incididunt nostrud. Nostrud consectetur eiusmod Lorem duis mollit. Reprehenderit adipisicing veniam exercitation reprehenderit eu. Deserunt incididunt eiusmod occaecat quis non nisi eu officia do duis qui. In exercitation reprehenderit culpa deserunt amet officia cupidatat commodo ipsum nisi.",
        "registered": "Thursday, February 13, 2014 10:12 AM",
        "lastConnected": "Monday, August 10, 2015 10:12 PM",
        "currLocation": {
            "lat": "-79.354338",
            "lng": "-142.764549"
        },
        "residance": {
            "city": "Afula",
            "country": "Germany"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Lenore Moses",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Tammie Dunn",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Sheila Kramer",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31e4d9a4b2481d9eb7",
        "firstName": "Millie",
        "lastName": "Cook",
        "password": 111,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1996,
        "description": "Et irure nostrud est ad aute nostrud. Commodo labore incididunt aliqua eiusmod ea sint veniam in qui. Nulla proident aute eu non quis id. Dolore laboris ad tempor cupidatat ex excepteur eu anim non et exercitation anim. Nisi dolore consequat culpa consectetur nisi. Aliqua ullamco consectetur laboris ullamco dolor deserunt est nulla tempor fugiat occaecat culpa.",
        "registered": "Saturday, July 15, 2017 1:57 AM",
        "lastConnected": "Sunday, April 14, 2019 8:23 AM",
        "currLocation": {
            "lat": "-63.150171",
            "lng": "-88.647828"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Germany"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Shaffer Bryan",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Bertha Murray",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Angela Carter",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b317c56b7529aa424af",
        "firstName": "Josefina",
        "lastName": "Lamb",
        "password": 112,
        "isAdmin": true,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1986,
        "description": "Exercitation consectetur duis aliqua dolore nisi do. Et non nisi elit est mollit aliqua ea pariatur duis ea tempor. Labore magna aliqua officia ea fugiat pariatur reprehenderit aliquip laborum. Aliquip esse aute commodo consectetur proident laboris culpa excepteur fugiat adipisicing ullamco.",
        "registered": "Thursday, January 29, 2015 5:34 PM",
        "lastConnected": "Saturday, July 18, 2015 7:16 PM",
        "currLocation": {
            "lat": "51.635352",
            "lng": "38.008617"
        },
        "residance": {
            "city": "Afula",
            "country": "Germany"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Mable Franklin",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Mays Padilla",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Bentley Haynes",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b316eb6a466304ba125",
        "firstName": "Jody",
        "lastName": "Gamble",
        "password": 113,
        "isAdmin": true,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1982,
        "description": "Ullamco duis minim commodo tempor adipisicing. Eu tempor est quis adipisicing. Elit est cupidatat aliquip consequat aliquip nostrud labore velit fugiat tempor Lorem. Ex labore ut minim non aute do enim veniam qui consectetur veniam cupidatat. Eu commodo enim officia magna sunt commodo in occaecat. Sit nisi velit ex aute fugiat veniam et eu nisi. Ad ex ipsum laborum ipsum nostrud amet.",
        "registered": "Tuesday, March 29, 2016 10:39 AM",
        "lastConnected": "Wednesday, October 5, 2016 4:50 AM",
        "currLocation": {
            "lat": "-71.15199",
            "lng": "-76.179622"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Coffey Holland",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Lena Beach",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Clarice Hobbs",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31195881a9271fcc4a",
        "firstName": "Cornelia",
        "lastName": "Rollins",
        "password": 114,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1974,
        "description": "Nulla fugiat est ullamco excepteur ullamco. Cillum dolore nisi aute commodo cupidatat cillum. Dolor minim ex incididunt voluptate dolor adipisicing qui esse. Irure nostrud cillum esse nostrud nisi laboris commodo nulla id consectetur voluptate sunt sunt mollit. Eu aute ut sint nisi reprehenderit sunt voluptate.",
        "registered": "Tuesday, January 28, 2014 4:14 PM",
        "lastConnected": "Monday, October 22, 2018 2:25 AM",
        "currLocation": {
            "lat": "13.667191",
            "lng": "107.339088"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "USA"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Laverne Alvarado",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Greer Stout",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Cote Leon",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31b351402c8adc074b",
        "firstName": "Wynn",
        "lastName": "Silva",
        "password": 115,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1962,
        "description": "Mollit irure reprehenderit irure in ullamco pariatur ea. Exercitation ipsum ullamco fugiat et eiusmod aute et qui minim veniam. Sunt sit anim nostrud tempor dolore esse cupidatat adipisicing irure.",
        "registered": "Tuesday, August 12, 2014 7:16 PM",
        "lastConnected": "Tuesday, March 31, 2015 11:12 PM",
        "currLocation": {
            "lat": "-70.760602",
            "lng": "22.393379"
        },
        "residance": {
            "city": "Afula",
            "country": "Jordan"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Rutledge Allison",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Wilson Tran",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Freida York",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b3119bbc0ca47616e45",
        "firstName": "Atkinson",
        "lastName": "Heath",
        "password": 116,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1963,
        "description": "Laboris exercitation ipsum proident voluptate culpa nulla eiusmod exercitation. Eiusmod adipisicing sint eu aute aute aliqua nulla exercitation veniam dolor. Veniam non ipsum pariatur do eiusmod voluptate ea sunt officia eiusmod reprehenderit aliquip dolore. Ea velit amet consequat ipsum ad reprehenderit consectetur aute. Ullamco anim mollit sint dolor nostrud excepteur.",
        "registered": "Tuesday, July 19, 2016 9:15 AM",
        "lastConnected": "Thursday, July 31, 2014 3:05 AM",
        "currLocation": {
            "lat": "77.394741",
            "lng": "35.367446"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Dunlap Haley",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Horn Guerra",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Lauren Burke",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b313a49c0fe4976b6c4",
        "firstName": "Fulton",
        "lastName": "Cooke",
        "password": 117,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1987,
        "description": "Irure nisi tempor ad sint fugiat dolor esse do incididunt consequat nisi veniam proident. Nostrud aliqua magna minim occaecat non quis. Proident ullamco adipisicing esse aute nisi cupidatat deserunt cupidatat labore enim mollit. Incididunt laborum exercitation ipsum aliquip veniam minim cillum culpa mollit mollit. Commodo elit labore eiusmod ullamco nisi ea sint. Duis excepteur cupidatat qui anim voluptate fugiat minim ipsum minim. Quis magna exercitation dolore qui reprehenderit labore tempor esse voluptate proident qui ipsum aliquip.",
        "registered": "Sunday, July 16, 2017 9:58 PM",
        "lastConnected": "Sunday, September 9, 2018 5:13 PM",
        "currLocation": {
            "lat": "-75.143522",
            "lng": "28.232239"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "USA"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Pam Frazier",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rhodes Kennedy",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Pat Cash",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b3102b105eabad65a52",
        "firstName": "Kelly",
        "lastName": "Walls",
        "password": 118,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1958,
        "description": "Aliqua culpa reprehenderit laboris elit sunt sit ullamco excepteur. Exercitation Lorem et proident duis ad nulla eu laboris ex pariatur cillum nulla est. Ex sit ea ad occaecat magna ex magna laborum. Adipisicing dolor laboris velit ut et ea in ullamco exercitation cillum dolor consectetur dolore dolor. Ullamco occaecat nulla velit ea duis id sit. Culpa elit do anim deserunt occaecat deserunt consectetur dolore. Ad occaecat elit et nostrud duis exercitation consectetur.",
        "registered": "Tuesday, March 4, 2014 11:47 AM",
        "lastConnected": "Sunday, January 25, 2015 8:25 PM",
        "currLocation": {
            "lat": "20.047226",
            "lng": "-48.37448"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Holly Reyes",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Welch Rosales",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Casey Cohen",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31f6539a25a0cd8c59",
        "firstName": "Sanders",
        "lastName": "Romero",
        "password": 119,
        "isAdmin": false,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1987,
        "description": "Aute enim nulla non nostrud. Qui adipisicing exercitation in consequat duis veniam est. Elit commodo aute dolor ex occaecat duis ea voluptate irure. Mollit consectetur Lorem nostrud in.",
        "registered": "Monday, March 26, 2018 8:34 PM",
        "lastConnected": "Friday, May 12, 2017 3:32 AM",
        "currLocation": {
            "lat": "3.051895",
            "lng": "-107.56389"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "sightseeing",
        "likes": [{
                "id": 0,
                "name": "Richard Morse",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rush Conrad",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Daniel Tillman",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    }
]