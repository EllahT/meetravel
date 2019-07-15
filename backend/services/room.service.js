module.exports = {
    placeInRoom
}

const gRooms = [];

function placeInRoom(user, toyId) {
    let room = gRooms.find(room => room.id === toyId);
    if (room) {
        room.members.find(member => member === user);
    } else {
        room = {
            id: toyId,
            members: [user]
        };
    }

    return room;
}