const friendService = require('./friend.service')

async function getFriendship(req, res) {
    const friendship = await friendService.getById(req.params.id)
    res.send(friendship);
}
  
const getFriendships = async (req, res) => {
    const friendships = await friendService.query()
    res.send(friendships);
}

async function getFriendshipsByUser(req, res) {
    const userId = req.params.userId;
    const friendships = await friendService.getUserFriendships(userId);
    res.send(friendships);
}

async function getRequestsByUser(req, res) {
    const userId = req.params.userId;
    const requests = await friendService.getUserRequests(userId);
    res.send(requests);
}

async function deleteFriendship(req, res) {
    await friendService.remove(req.params.id)
    res.send({})
}

async function convertRequest(req, res) {
    const requestId = req.params.requestId;
    const request = await friendService.getById(requestId);
    request.status = 'approved';
    await friendService.convertRequestToFriendship(request);
    res.send(request);
}

async function addRequest(req, res) {
    const request = req.body;
    const requestWithId = await friendService.addRequest(request);
    res.send({requestWithId});
}

module.exports = {
    getFriendship,
    getFriendships,
    deleteFriendship,
    addRequest,
    getFriendshipsByUser,
    getRequestsByUser,
    convertRequest
}