const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByFirstName,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = {};

    if (filterBy.gender !== 'all') {
        criteria.gender = filterBy.gender;
    }

    if (filterBy.minAge && filterBy.maxAge) {
        const maxBirthDate = new Date().getFullYear() - filterBy.minAge;
        const minBirthDate = new Date().getFullYear() - filterBy.maxAge;
        criteria.birthDate = { $gte: minBirthDate, $lte: maxBirthDate }
    }

    const collection = await dbService.getCollection('user')

    try {
        const users = await collection.find(criteria).toArray();

        if (typeof(filterBy.distance) !== Number) {
            filterBy.distance = JSON.parse(filterBy.distance);
        }

        if (filterBy.distance) {
            filteredUsers = filteredUsers.filter(user => {
                const distance = GeocodeService.calulateDistance(location, user.currLocation);
                return distance < filterBy.distance;
            })
        }
        return users

    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}
async function getByFirstName(firstName) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ firstName })
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${firstName}`)
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.deleteOne({ "_id": ObjectId(userId) })
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('user')
    try {
        console.log(user)
        await collection.replaceOne({ "_id": ObjectId(user._id) }, { $set: user })
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