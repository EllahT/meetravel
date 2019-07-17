
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
    convertRequestToFriendship
}

async function getUserFriendships(userId) {
    const collection = await dbService.getCollection('friendships')
    const id = new ObjectId(userId.slice(10, userId.length-2));
    
    try {
        const friendships = await collection.find( 
            {status: 'approved', members: { $in : [id]} }).toArray();

        return friendships;
    } catch (err) {

        console.log(`ERROR: cannot find friendships for user ${userId}`);

        throw err;
    }
}

async function getUserRequests(userId) {
    const collection = await dbService.getCollection('friendships')
    const id = new ObjectId(userId.slice(10, userId.length-2));
    
    try {
        const requests = await collection.find( 
            { status: 'pending', "resipient.userId": id}).toArray();

        return requests;
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
        const user = await collection.findOne({"_id":ObjectId(friendshipId)})
        return user
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
    var id = ObjectId(request.resipient.userId);
    console.log(id);
    const collection = await dbService.getCollection('friendships')
    try {
        await collection.insertOne(request);
        return request;
    } catch (err) {
        console.log(`ERROR: cannot insert request`)
        throw err;
    }
}