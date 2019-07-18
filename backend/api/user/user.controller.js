const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}
  
const getUsers = async (req, res) => {
    try {
        const filterBy = req.query;
        const users = await userService.query(filterBy)
        res.send(users);
    
    } catch (err) {
        console.log('got error at "get users" function with',err);
        
        logger.error('[GetUsers] ' + err)
        res.status(500).send({ error: 'could not get users from DB, please try later' })    
    }  
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.send({})
}

async function updateUser(req, res) {
    const user = req.body;
    await userService.update(user)
    res.send({user});
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser
}