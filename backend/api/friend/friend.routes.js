const express = require('express')
const requireAuth = require('../../middlewares/requireAuth.middleware')
const {updateFriendship, getFriendship, getFriendships, deleteFriendship, addRequest, getFriendshipsByUser, getRequestsByUser, convertRequest, getRequestsSentByUser} = require('./friend.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', requireAuth, getFriendships)
router.get('/friends/byuser', requireAuth, getFriendshipsByUser)
router.get('/requests/byuser', requireAuth, getRequestsByUser)
router.get('/sent/byuser', requireAuth, getRequestsSentByUser)
router.get('/:id', requireAuth, getFriendship)
router.delete('/:id',  requireAuth, deleteFriendship)
router.post('/', requireAuth, addRequest)
router.put('/request/:id', requireAuth, convertRequest)
router.put('/:id', requireAuth, updateFriendship)

module.exports = router