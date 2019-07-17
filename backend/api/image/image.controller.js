const imageService = require('./image.service')
const cloudinary = require('cloudinary').v2;
const multer = require('multer')

const upload = multer({ dest: 'uploads/' });
const cloudinaryConfig = require('./config.json').cloudinary
cloudinary.config(cloudinaryConfig);

async function getRandomImage (req, res) {
    const term = req.params.term;
    const imgSrc = await imageService.getRandomImage(term);
    res.send(imgSrc);
}

async function uploadImg (req, res) {
    cloudinary.uploader.upload(req.file.path,
        function (error, result) {
            res.json(result)
        });
}

module.exports = {
    getRandomImage,
    uploadImg
}