const friendService = require('./friend.service')

async function getFriendship(req, res) {
    const friendship = await friendService.getById(req.params.id);
    res.send(friendship);
}
  
const getFriendships = async (req, res) => {
    const friendships = await friendService.query()
    res.send(friendships);
}

async function getFriendshipsByUser(req, res) {
    const user = req.session.user;
    const friendships = await friendService.getUserFriendships(user._id);
    res.send(friendships);
}

async function getRequestsByUser(req, res) {
    const user = req.session.user;
    const requests = await friendService.getUserRequests(user._id);
    res.send(requests);
}

async function getRequestsSentByUser(req, res) {
    const user = req.session.user;
    const requests = await friendService.getUserSentRequests(user._id);
    res.send(requests);
}

async function deleteFriendship(req, res) {
    await friendService.remove(req.params.id)
    res.send({})
}

async function convertRequest(req, res) {
    const requestId = req.params.id;
    const request = await friendService.getById(requestId);
    request.status = 'approved';
    await friendService.convertRequestToFriendship(request);
    res.send(request);
}

async function addRequest(req, res) {
    const request = req.body;
    try {
        const requestWithId = await friendService.addRequest(request);
        res.send(requestWithId);
    }
    catch(err) {
        res.status(500).send(err);
    }   
}

async function updateFriendship(req, res) {
    const friendship = req.body;
    try {
        await friendService.update(friendship);
        res.send({friendship});
    }

    catch(err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getFriendship,
    getFriendships,
    deleteFriendship,
    addRequest,
    getFriendshipsByUser,
    getRequestsByUser,
    convertRequest,
    getRequestsSentByUser,
    updateFriendship
}