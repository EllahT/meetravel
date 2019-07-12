import UserService from '../services/UserService'

export default {
    strict: true,
    state: {
        users: [],
        loggedUser: {_id: 1, name: "Puki", trips: ["first trip", "sec trip"]},
        likes: [],
        matches: [],
        notifications: [],
        filters: {},
        isLoadingUsers: false
      },
    
      getters: {
        users(state) {
          return state.users;
        },

        loggedInUser(state) {
          return state.loggedUser;
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
    
        likes(state) {
          return state.likes;
        },
    
        filters(state) {
          return state.filters;
        },
    
        notifications(state) {
          return state.notifications;
        }
    
      },
    
      mutations: {
        setLoggedUser(state, {user}) {
          state.loggedUser = user;
        },
    
        setUsers(state, {users}) {
          state.users = users;
        },
    
        clearLoggedUser(state) {
          state.loggedUser = null;
        },
    
        updateUser(state, {updatedUser}) {
          const idx = state.users.findIndex(user => user._id === updatedUser._id);
          state.users.splice(idx, 1, updatedUser);
        },
    
        addUser(state, {addedUser}) {
          state.users.push(addedUser);
        },
    
        removeUser(state, {userId}) {
          const idx = state.users.findIndex(user => user._id === userId);
          state.users.splice(idx, 1);
        },
    
        setFilter(state, { filters }) {
          state.filters = JSON.parse(JSON.stringify(filters));
        },
    
        addLike(state, {_id, username}) {
          state.likes.push({_id, username});
        },
        
        setLoadingUsers(state, {val}) {
          state.isLoadingUsers = val;
        }
      },
    
      actions: {
        login(context, {username, password}) {
          return UserService.login(username, password).then((user) => {
            context.commit({type: 'setLoggedUser', user});
            return user;
          })
        },
    
        signup(context, {userData}) {
          return UserService.add(userData)
          .then((addedUser) => {
            context.commit({type: 'addUser', addedUser});
            return addedUser;
          })
        },
    
        deleteUser(context, {userId}) {
          return UserService.remove(userId).then(() => {
            context.commit({type: 'removeUser', userId});
            return {};
          })
        },
    
        logout(context) {
          return UserService.logout().then(() => {
            context.commit({type: 'clearLoggedUser'});
            return {};
          })
        },
    
        likeUser(context, {userId}) {
          UserService.getById(userId)
          .then(({_id, username}) => {
            context.commit({type: 'addLike'}, {_id, username});
          })
        },
    
        setFilter(context, {filters}) {
          context.commit({ type: "setLoadingUsers", val: true });
          context.commit({ type: "setFilter", filters });
          UserService.query(filters).then(filteredUsers => {
            context.commit({ type: "setUsers", filteredUsers });
            context.commit({ type: "setLoadingUsers", val: false });
          });
          
        },
    
        updateProfile(context, {userData}) {
          return UserService.update(user).then((updatedUser) => {
            context.commit({ type: 'updateUser', updatedUser });
            return updatedUser;
          });
        },
    
        loadUsers(context) {
          return UserService.query()
            .then(users => {
            context.commit({ type: "setUsers", users });
            return users;
          });
        }
      }
}