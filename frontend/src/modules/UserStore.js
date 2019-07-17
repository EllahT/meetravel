import UserService from '../services/UserService'

export default {
    strict: true,
    state: {
        users: [],
        loggedUser:  { "_id" : 'ObjectId("5d2c8782a896e921905c63c9")',
        "name" : {
            "first" : "Tabatha",
            "last" : "Ewing"
        },
        "password" : "$2b$10$fHwEROYj/XCBjpJS4W2hRO.7gvOgDvaF3iySuwfJVZfURm29kKRVK",
        "isAdmin" : false,
        "email" : "tabatha.ewing@undefined.biz",
        "gender" : "woman",
        "profileImg" : "https://media.istockphoto.com/photos/laughing-woman-in-park-picture-id658617510?k=6&m=658617510&s=612x612&w=0&h=Ycl_BBwWQop7Wj1wWG3nyQqB5glPxRuqmb02WpKp0ao=",
        "galleryImgs" : [ 
            {
                "picture" : "http://placehold.it/32x32"
            }, 
            {
                "picture" : "http://placehold.it/32x32"
            }, 
            {
                "picture" : "http://placehold.it/32x32"
            }
        ],
        "birthDate" : 1992,
        "description" : "Ex qui ex commodo dolore consectetur ipsum dolor do elit. Est occaecat elit aliquip dolor Lorem non. Qui veniam culpa qui magna magna aliqua qui fugiat duis. Aliquip magna fugiat sint nulla do pariatur voluptate elit elit id reprehenderit aliquip Lorem. Fugiat nulla irure deserunt laboris aliqua eu veniam cillum laboris officia ex voluptate.",
        "registered" : "Saturday, January 14, 2017 5:29 AM",
        "lastConnected" : "Friday, November 14, 2014 6:03 AM",
        "residance" : {
            "city" : "Tel Aviv",
            "country" : "Jordan"
        },
        "travelType" : "hike",
        "location" : {
            "lat" : 35.6866331237007,
            "lng" : 139.775210100684
        },
        "bucketList" : [ 
            "Mexico"
        ]},
        
        notifications: [],
        filterBy: {
            distance: 20,
            minAge: 20,
            maxAge: 80,
            gender: 'all',
            name: null
        },
        isLoadingUsers: false,
        location: {lat: 32.059391999999995, lng: 34.8512256, address: 'Kiryat Ono, Israel'}
    },

    getters: {
        loggedInUser(state) {
            return state.loggedUser;
        },

        users(state) {
            return state.users;
        },

        isLoadingUsers(state) {
            return state.isLoadingUsers;
        },

        isAdmin(state) {
            return state.loggedInUser.isAdmin;
        },

        filterBy(state) {
            return state.filterBy;
        },

        userById: state => id => {
            return state.users.find(user => user._id === id);
        },

        location(state) {
            return state.location;
        }
    },

    mutations: {
        setLoggedUser(state, { user }) {
            state.loggedUser = user;
        },

        setUsers(state, {filteredUsers}) {
            state.users = filteredUsers;
        },

        updateUser(state, { updatedUser }) {
            const idx = state.users.findIndex(user => user._id === updatedUser._id);
            state.users.splice(idx, 1, updatedUser);
        },

        addUser(state, { addedUser }) {
            state.users.push(addedUser);
        },

        removeUser(state, { userId }) {
            const idx = state.users.findIndex(user => user._id === userId);
            state.users.splice(idx, 1);
        },

        setFilter(state, { filterBy }) {
            state.filterBy = JSON.parse(JSON.stringify(filterBy));
        },

        setFilterByName(state, {filterByName}) {
            state.filterBy.name = filterByName;
        },

        updateLocation(state, {location}) {
            state.location = location;
          }
    },

    actions: {
        login(context, { username, password }) {
            return UserService.login(username, password).then((user) => {
                context.commit({ type: 'setLoggedUser', user });
                return user;
            })
        },

        signup(context, { user }) {
            return UserService.add(user)
                .then((addedUser) => {
                    context.commit({ type: 'addUser', user: addedUser });
                    return addedUser;
                })
        },

        deleteUser(context, { userId }) {
            return UserService.remove(userId).then(() => {
                context.commit({ type: 'removeUser', userId });
                return {};
            })
        },

        updateUser(context, { user }) {
            return UserService.update(user)
                .then(updatedUser => {
                    console.log('updated user at store', updatedUser);
                    context.commit({ type: 'updateUser', user: updatedUser })
                    return updatedUser
                })
        },

        logout(context) {
            return UserService.logout().then(() => {
                context.commit({ type: 'setLoggedUser', user: null });
                return {};
            })
        },

        setFilter(context, { filterBy }) {
            // context.commit({ type: "setLoadingUsers", val: true });
            context.commit({ type: "setFilter", filterBy });
            context.dispatch({type: 'loadUsers'});
        },

        setFilterByName(context, {filterByName}) {
            context.commit({type: 'setFilterByName', filterByName});
            context.dispatch({type: 'loadUsers'});
        },

        updateProfile(context, { userData }) {
            return UserService.update(userData).then((updatedUser) => {
                context.commit({ type: 'updateUser', updatedUser });
                return updatedUser;
            });
        },

        loadUsers(context) {
            return UserService.query(context.state.filterBy, context.state.location)
                .then(filteredUsers => {
                    context.commit({ type: "setUsers", filteredUsers });
                    return filteredUsers;
                });
        },

        updateCurrLocation(context, {location}) {
            context.commit({type: 'updateLocation', location})
        }
    }
}