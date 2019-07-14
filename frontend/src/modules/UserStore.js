import UserService from '../services/UserService'

export default {
    strict: true,
    state: {
        users: [],
        loggedUser:  {"_id": "5d275b31d4e499ccc0a640ae",
        "firstName": "Terri",
        "lastName": "Holman",
        "password": 100,
        "isAdmin": true,
        "gender": {"type": 'man', "display": '👨 Man'},
        "profileImg": "https://api.adorable.io/avatars/100/1.png",
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
            "lat": -82.87981,
            "lng": 1.444387
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
        likes: [],
        matches: [],
        notifications: [],
        filters: {
            distance: 15000,
            age: {from: 20, to: 80},
            gender: {type: 'all', display: 'All'},
            dates: {from: new Date(), to: new Date()}
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

        matchs(state) {
            return state.matches;
        },

        filters(state) {
            return state.filters;
        },

        notifications(state) {
            return state.notifications;
        },

        userById: state => id => {
            return state.users.find(user => user._id === id);
        },

        currLocation(state) {
            return state.location;
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

        clearLoggedUser(state) {
            state.loggedUser = null;
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

        setFilter(state, { filters }) {
            state.filters = JSON.parse(JSON.stringify(filters));
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

        signup(context, { userData }) {
            return UserService.add(userData)
                .then((addedUser) => {
                    context.commit({ type: 'addUser', addedUser });
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

        saveUser(context, { user }) {
            return UserService.add(user)
                .then(addedUser => {
                    console.log('added user at store', addedUser);
                    context.commit({ type: 'addUser', user: addedUser })
                    return addedUser
                })
        },

        logout(context) {
            return UserService.logout().then(() => {
                context.commit({ type: 'clearLoggedUser' });
                return {};
            })
        },

        likeUser(context, { userId }) {
            UserService.getById(userId)
                .then(({ _id, username }) => {
                    context.commit({ type: 'addLike' }, { _id, username });
                })
        },

        setFilter(context, { filters }) {
            // context.commit({ type: "setLoadingUsers", val: true });
            context.commit({ type: "setFilter", filters });
            UserService.query(filters, context.state.location).then(filteredUsers => {
                context.commit({ type: "setUsers", filteredUsers });
                // context.commit({ type: "setLoadingUsers", val: false });
            });

        },

        updateProfile(context, { userData }) {
            return UserService.update(userData).then((updatedUser) => {
                context.commit({ type: 'updateUser', updatedUser });
                return updatedUser;
            });
        },

        loadUsers(context) {
            return UserService.query(context.state.filters, context.state.location)
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