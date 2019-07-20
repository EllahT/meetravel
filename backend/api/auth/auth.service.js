const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const saltRounds = 10
async function login(username, password) {
    if (!username || !password) return Promise.reject('username and password are required!')
    logger.debug(`auth.service - trying to login with username: ${username}`);
    const user = await userService.getByUsername(username);
    if (!user) return Promise.reject('Invalid username or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')
    delete user.password;
    return user;
}

async function signup(first, last, password) {
    logger.debug(`auth.service - signup with firstName: ${first}, lastName: ${last}, password: ${password}`)
    if (!first || !last || !password) return Promise.reject('firts name, last name and password are required!')
    const hash = await bcrypt.hash(password, saltRounds)
    const user = await userService.add({ name: { first, last }, username: first.toLowerCase()+last.toLowerCase(), password: hash })
    delete user.password;
    return user;
}

module.exports = {
    signup,
    login,
}