const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}
  
const getUsers = async (req, res) => {
    const filterBy = req.query;
    console.log(filterBy)
    const users = await userService.query(filterBy)
    res.send(users);
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.send({})
}

module.exports = {
    getUser,
    getUsers,
    deleteUser
}