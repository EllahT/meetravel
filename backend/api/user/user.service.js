const dbService = require('../../services/db.service')
const utilService = require('../../services/util.service')
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

    if (Object.keys(filterBy).length > 0) {
        if (filterBy.gender !== 'all') {
            criteria.gender = filterBy.gender;
        }

        if (filterBy.minAge && filterBy.maxAge) {
            const maxBirthDate = new Date().getFullYear() - filterBy.minAge;
            const minBirthDate = new Date().getFullYear() - filterBy.maxAge;
            criteria.birthDate = { $gte: minBirthDate, $lte: maxBirthDate }
        }
    }
    const collection = await dbService.getCollection('user')

    try {
        let users = await collection.find(criteria).toArray();

        if (Object.keys(filterBy).length > 0) {
            if (filterBy.distance) {
                if (typeof(filterBy.distance) !== Number) {
                    filterBy.distance = JSON.parse(filterBy.distance);
                }
    
                users = users.filter(user => {
                    if (user.location) {
                        const distance = utilService.calulateDistance({ lat: filterBy.currLat, lng: filterBy.currLng }, user.location);
                        return distance < filterBy.distance;
                    } else return false;
                })
            }
    
    
            if (filterBy.name !== 'null') {
    
                users = users.filter(user => {
                    return (user.name.first.toLowerCase().includes(filterBy.name.toLowerCase()) || user.name.last.toLowerCase().includes(filterBy.name.toLowerCase()))
                })
            }
        }
        
        return users;
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
    // console.log('first name at BE user service: ', firstName);
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ "name.first": firstName })
        console.log('BE user-service getByFirstName: ', user);
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
    const userWithoutId = JSON.parse(JSON.stringify(user));
    delete userWithoutId._id;
    const id = new ObjectId(user._id.slice(10, user._id.length-2));
    try {
        
        await collection.replaceOne({ "_id": ObjectId(id) }, { $set: userWithoutId })
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function add(user) {
    // console.log('details of user at user-service BE:', user);
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}