import socket from '../services/SocketService.js'

export default {
    state: {
        notifications: []
    },
    getters: {
        notifications(state) {
            return state.notifications; 
        }
    },
    mutations: {
        addNotification(state, {notification}) {
            state.notifications.push(notification);
        },

    },
    actions: {
        appLogin({commit, rootGetters}) {
            socket.emit('app login', {username: rootGetters.loggedInUser.username, userId: rootGetters.loggedInUser._id});
            socket.on('app newNotification', notification=>commit({type: 'addNotification', notification }));
            socket.on('app history', notifications => {
                notifications.forEach(notification => {
                    commit({type: 'addNotification', notification })        
                });
            });  
        },

        sendNotification(context, {notification}) {
            console.log('got inside send notification', notification);
            socket.emit('app notification', notification)
        },
        
    }
}