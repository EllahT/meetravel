module.exports = {
    placeInRoom
}

const gRooms = [];

function placeInRoom(username, id) {
    let room = gRooms.find(room => room.id === id);
    if (room) {
        room.members.find(member => member === username);
    } else {
        room = {
            id,
            members: [username],
            msgs: []
        };
    }

    return room;
}