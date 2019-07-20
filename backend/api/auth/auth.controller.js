const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function login(req, res) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password)
        req.session.user = user;
        res.json(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const { firstName, lastName, password } = req.body
        logger.debug(firstName + ", " + lastName + ", " + password)
        const user = await authService.signup(firstName+lastName, password)
        logger.debug(`auth.route - new user created: ` + JSON.stringify(user))
        req.session.user = user
        res.status(200).send(user)
    } catch (err) {
        logger.error('[SIGNUP] ' + err)
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

async function logged(req, res) {
    res.send(req.session.user);
}

module.exports = {
    login,
    signup,
    logout,
    logged
}