const express = require('express')
const requireAuth = require('../../middlewares/requireAuth.middleware')
const {getUser, getUsers, deleteUser} = require('./user.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
console.log('testing pulling!')

router.get('/', getUsers)
router.get('/:id', getUser)
router.delete('/:id',  requireAuth, deleteUser)

module.exports = router