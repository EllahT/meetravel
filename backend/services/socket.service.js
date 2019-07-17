
const socketIO = require('socket.io');
const roomService = require('./room.service');

var io;
var activeUsersCount = 0;

function setup(http) {
    io = socketIO(http);
    io.on('connection', function (socket) {
        console.log('a user connected');
        var room, connectedUser;
    
        activeUsersCount++;
    
        socket.on('disconnect', () => {
            console.log('user disconnected', connectedUser);
            const msg = {
                from: 'System',
                txt: `${connectedUser} Left`
            }
            io.to(room.id).emit('chat newMsg', msg);
            activeUsersCount--;
        });
    
        socket.on('chat join', ({
            user,
            toyId
        }) => {
            room = roomService.placeInRoom(user, toyId);
            connectedUser = user;
            console.log('Placed', user, 'in room:', room);
            socket.join(room.id);
            if (!msgsDB[room.id]) msgsDB[room.id] = [];
            console.log(msgsDB[room.id]);
            io.to(room.id).emit('chat history', msgsDB[room.id]);
    
            const msg = {
                from: 'System',
                txt: `${user} Joined`
            }
            io.to(room.id).emit('chat newMsg', msg);
        });
    
        socket.on('chat msg', (msg) => {
            console.log(`got message ${msg.txt} from ${msg.from}`);
            if (msgsDB[room.id]) msgsDB[room.id].push(msg);
            io.to(room.id).emit('chat newMsg', msg);
        });
    });    
}


module.exports = {
    setup
}