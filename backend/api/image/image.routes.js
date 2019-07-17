const {getRandomImage, uploadImg} = require('./image.controller')
const express = require('express')
const requireAuth = require('../../middlewares/requireAuth.middleware')
const multer = require('multer')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

const upload = multer({ dest: 'uploads/' })


router.get('/setRandomImg/:term', getRandomImage);
router.post('/upload/cloudinary', upload.single('imgUpload'), uploadImg);

module.exports = router;

