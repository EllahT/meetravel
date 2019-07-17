const express = require('express')
const requireAuth = require('../../middlewares/requireAuth.middleware')
const {getFriendship, getFriendships, deleteFriendship, addFriendship, getFriendshipsByUser} = require('./friend.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getFriendships)
router.get('/byuser/:userId', getFriendshipsByUser)
router.get('/:id', getFriendship)
router.delete('/:id',  requireAuth, deleteFriendship)
router.post('/', addFriendship)

module.exports = router