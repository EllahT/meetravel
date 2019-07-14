
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByEmail,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = {};

    if (filterBy.gender !== 'all') {
        criteria.gender = filterBy.gender;
    }

    // if (typeof(filterBy.distance) !== Number) {
    //     filterBy.distance = JSON.parse(filterBy.distance);
    // }

    // if (filterBy.distance) {
    //     filteredUsers = filteredUsers.filter(user => {
    //         const distance = GeocodeService.calulateDistance(location, user.currLocation);
    //         return distance < filterBy.distance;
    //     })
    // }
    
    if (filterBy.age) {
        const minAge = new Date().getFullYear() - filterBy.age.from;
        const maxAge = new Date().getFullYear() - filterBy.age.to;
        criteria.age = {$gte : minAge, $lte: maxAge}
    }

    const collection = await dbService.getCollection('user')
    
    try {
        const users = await collection.find(criteria).toArray();
        return users
    
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({"_id":ObjectId(userId)})
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}
async function getByEmail(email) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({email})
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${email}`)
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.remove({"_id":ObjectId(userId)})
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.replaceOne({"_id":ObjectId(user._id)}, {$set : user})
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}


