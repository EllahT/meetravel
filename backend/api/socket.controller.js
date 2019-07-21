const socketService = require('../services/socket.service');

async function sendNotification(payload) {
    try {
        await socketService.sendNotification(payload);
    }

    catch(err) {
        console.log(err);
    }
}

module.exports = {
    sendNotification
}