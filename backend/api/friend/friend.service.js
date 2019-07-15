
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
    getUserFriendships
}

async function getUserFriendships(userId) {
    const collection = await dbService.getCollection('user')
    
    try {
        const friendships = await collection.aggregate([
        
            //TODO fix to use the userID that i got from client
        {$match: { _id: ObjectId("5d2c8782a896e921905c63c9") }},
        {
           $lookup:
              {
                 from: "friendships",
                 localField: "_id",
                 foreignField: "members",
                 as: "friends_info"
             }
        }]).toArray();

        return friendships[0].friends_info;
    } catch (err) {

        console.log(`ERROR: cannot find friendships for user ${userId}`);

        throw err;
    }
}

async function query(userId = {}) {
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

async function add(friendship) {
    const collection = await dbService.getCollection('friendships')
    try {
        await collection.insertOne(friendship);
        return friendship;
    } catch (err) {
        console.log(`ERROR: cannot insert friendship`)
        throw err;
    }
}