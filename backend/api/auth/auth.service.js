const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const saltRounds = 10
async function login(firstName, password) {
    // console.log('firstName at auth BE service', firstName);
    if (!firstName || !password) return Promise.reject('first name and password are required!')
    logger.debug(`auth.service - trying to login with firstName: ${firstName}`)
    const user = await userService.getByFirstName(firstName)
    if (!user) return Promise.reject('Invalid first name or password')
        // console.log('line 12 auth password, user.password', password, user.password);
    const match = await bcrypt.compare(password, user.password)
        // console.log('line 14 auth BE', match);
    if (!match) return Promise.reject('Invalid first name or password')
    delete user.password;
    // console.log('user at auth-service BE:', user);
    return user;
}

async function signup(first, last, password) {
    logger.debug(`auth.service - signup with firstName: ${first}, lastName: ${last}, password: ${password}`)
    if (!first || !last || !password) return Promise.reject('firts name, last name and password are required!')
    console.log('password at auth service', password)
    const hash = await bcrypt.hash(password, saltRounds)
    const user = await userService.add({ name: { first, last }, password: hash })
    delete user.password;
    return user;
}

module.exports = {
    signup,
    login,
}