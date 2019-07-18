
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    addRequest,
    getUserFriendships,
    getUserRequests,
    getUserSentRequests,
    convertRequestToFriendship
}

async function getUserFriendships(userId) {
    const collection = await dbService.getCollection('friendships')
    
    try {
        const friendships = await collection.find( 
            {status: 'approved', $or: [ { "resipient.userId": userId }, { "sender.userId": userId } ] }).toArray();

        return friendships;
    } catch (err) {

        console.log(`ERROR: cannot find friendships for user ${userId}`);

        throw err;
    }
}

async function getUserRequests(userId) {
    const collection = await dbService.getCollection('friendships')
    
    try {
        const requests = await collection.find( 
            { status: 'pending', "resipient.userId": userId}).toArray();

        return requests;
    } catch (err) {

        console.log(`ERROR: cannot find requests for user ${userId}`);

        throw err;
    }
}

async function getUserSentRequests(userId) {
    const collection = await dbService.getCollection('friendships')
    
    try {
        const sentRequests = await collection.find( 
            { status: 'pending', "sender.userId": userId}).toArray();

        return sentRequests;
    } catch (err) {

        console.log(`ERROR: cannot find requests for user ${userId}`);

        throw err;
    }
}


async function query() {
    const criteria = {};

    const collection = await dbService.getCollection('friendships')
    
    try {
        const friendships = await collection.find(criteria).toArray();
        return friendships;
    
    } catch (err) {
        console.log('ERROR: cannot find friendship')
        throw err;
    }
}

async function getById(friendshipId) {
    const collection = await dbService.getCollection('friendships')
    try {
        const friendship = await collection.findOne({"_id":ObjectId(friendshipId)});
        return friendship;
    } catch (err) {
        console.log(`ERROR: while finding friendship ${friendshipId}`)
        throw err;
    }
}

async function remove(friendshipId) {
    const collection = await dbService.getCollection('friendships')
    try {
        await collection.remove({"_id":ObjectId(friendshipId)})
    } catch (err) {
        console.log(`ERROR: cannot remove friendship ${friendshipId}`)
        throw err;
    }
}

async function update(friendship) {
    const collection = await dbService.getCollection('friendships')
    const friendshipWithoutId = JSON.parse(JSON.stringify(friendship));
    delete friendshipWithoutId._id;
    try {
        await collection.replaceOne({"_id":ObjectId(friendship._id)}, {$set : friendship})
        console.log('friendship was updated');
        return friendship;
    } catch (err) {
        console.log(`ERROR: cannot update friendship ${friendship._id}`)
        throw err;
    }
}

async function convertRequestToFriendship(request) {
    const collection = await dbService.getCollection('friendships')
    try {
        await collection.replaceOne({"_id":ObjectId(request._id)}, {$set : request})
        console.log('request was converted to friendship');
        return request;
    } catch (err) {
        console.log(`ERROR: cannot convert the request ${request._id}`)
        throw err;
    }
}

async function addRequest(request) {
    const collection = await dbService.getCollection('friendships')
    try {
        const friendship = await collection.findOne({$or: [ {"resipient.userId": request.sender.userId, "sender.userId": request.resipient.userId}, {"sender.userId": request.sender.userId, "resipient.userId": request.resipient.userId} ]});
        if (friendship) throw 'ERROR: already friends or request already sent!';
        await collection.insertOne(request);
        return request;
    } catch (err) {
        console.log(`ERROR: cannot insert request`)
        throw err;
    }
}