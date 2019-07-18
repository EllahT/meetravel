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
            id: id,
            members: [username]
        };
    }

    return room;
}