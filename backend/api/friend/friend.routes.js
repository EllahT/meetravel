const express = require('express')
const requireAuth = require('../../middlewares/requireAuth.middleware')
const {getFriendship, getFriendships, deleteFriendship, addRequest, getFriendshipsByUser, getRequestsByUser, convertRequest} = require('./friend.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getFriendships)
router.get('/friends/byuser/:userId', getFriendshipsByUser)
router.get('/requests/byuser/:userId', getRequestsByUser)
router.get('/:id', getFriendship)
router.delete('/:id',  requireAuth, deleteFriendship)
router.post('/', addRequest)
router.put('/request/:id', convertRequest)

module.exports = router