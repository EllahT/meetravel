
const socketIO = require('socket.io');
const roomService = require('./room.service');

var io;
const msgDB = [];
const notificationsDB = [];
var activeUsersCount = 0;

function setup(http) {
    io = socketIO(http);
    io.on('connection', function (socket) {
        console.log('a user connected');
        var room, connectedUser;
    
        activeUsersCount++;
    
        // socket.on('disconnect', () => {
        //     console.log('user disconnected', connectedUser);
        //     const msg = {
        //         from: 'System',
        //         txt: `${connectedUser} Left`
        //     }
        //     io.to(room.id).emit('chat newMsg', msg);
        //     activeUsersCount--;
        // });
    
        // socket.on('chat join', ({
        //     user,
        //     friendshipId
        // }) => {
        //     room = roomService.placeInRoom(user, friendshipId);
        //     connectedUser = user;
        //     console.log('Placed', user, 'in room:', room);
        //     socket.join(room.id);
        //     if (!msgsDB[room.id]) msgsDB[room.id] = [];
        //     console.log(msgsDB[room.id]);
        //     io.to(room.id).emit('chat history', msgsDB[room.id]);
    
        //     const msg = {
        //         from: 'System',
        //         txt: `${user} Joined`
        //     }
        //     io.to(room.id).emit('chat newMsg', msg);
        // });
    
        // socket.on('chat msg', (msg) => {
        //     console.log(`got message ${msg.txt} from ${msg.from}`);
        //     if (msgsDB[room.id]) msgsDB[room.id].push(msg);
        //     io.to(room.id).emit('chat newMsg', msg);
        // });

        socket.on('app login', ({
            username,
            userId
        }) => {
            room = roomService.placeInRoom(username, userId);
            connectedUser = username;
            console.log('Placed', username, 'in room:', room);
            socket.join(room.id);
            if (!notificationsDB[room.id]) notificationsDB[room.id] = [];
            console.log(notificationsDB[room.id]);
            io.to(room.id).emit('app history', notificationsDB[room.id]);
    
            const notification = {
                from: 'System',
                txt: `${username} Logged In`
            }
            io.to(room.id).emit('app newNotification', notification);
        });
    
        socket.on('app notification', (notification) => {
            console.log(`new notification ${notification.type} from ${notification.from}, to ${notification.to}`);
            let msg = {txt: `new ${notification.type} from ${notification.from}`, timestamp: new Date().getMilliseconds()};
            if (notificationsDB[notification.to]) notificationsDB[notification.to].push({msg});
            io.to(notification.to).emit('new notification', msg);
        });
    });    
}

module.exports = {
    setup
}