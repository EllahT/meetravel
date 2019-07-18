import UserService from '../services/UserService'

export default {
    strict: true,
    state: {
        users: [],
        loggedUser: null,
        notifications: [],
        filterBy: {
            distance: 20,
            minAge: 20,
            maxAge: 80,
            gender: 'all',
            name: null
        },
        location: { lat: 32.059391999999995, lng: 34.8512256, address: 'Kiryat Ono, Israel' }
    },

    getters: {
        loggedInUser(state) {
            return state.loggedUser;
        },

        users(state) {
            return state.users;
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

        setUsers(state, { filteredUsers }) {
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

        setFilterByName(state, { filterByName }) {
            state.filterBy.name = filterByName;
        },

        updateLocation(state, { location }) {
            state.location = location;
        }
    },

    actions: {
        login(context, { user }) {
            return UserService.login(user)
                .then((user) => {
                    if (!user) throw 'no user found'
                    else {
                        context.commit({ type: 'setLoggedUser', user });
                        context.dispatch({type: 'appLogin', root: true });
                        return user;
                    }
                })
        },

        signup(context, { user }) {
            return UserService.signup(user)
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
            context.commit({ type: "setFilter", filterBy });
            context.dispatch({ type: 'loadUsers' });
        },

        setFilterByName(context, { filterByName }) {
            context.commit({ type: 'setFilterByName', filterByName });
            context.dispatch({ type: 'loadUsers' });
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

        updateLocation(context, { location }) {
            context.commit({ type: 'updateLocation', location })
        },

        loadUserById(context, { userId }) {
            return UserService.getById(userId)
                .then(user => user)
        },

        loadUserOrDefaultUser(context) {
            return UserService.getLoggedUser() 
            .then(user => {
                if (user) {
                    context.commit({type: 'setLoggedUser',user})
                } else {
                   context.dispatch({ type: "login", user: { username: "TabathaEwing", password: "tabathaewing" } })
                    .then(() => {
                        return {};
                    })
                }
            })
            
        }
    }
}