const cheerio = require('cheerio');
const axios = require('axios');
const utilService = require('../services/util.service');

module.exports = {
    getRandomImage
}

const TERM = 'travel';

function getRandomImage() {
    return axios.get(`http://www.istockphoto.com/il/photos/${TERM}`)
    .then(res => {
        const $ = cheerio.load(res.data);
        const imgs = $('img.srp-asset-image');
        return imgs[utilService.getRandomInt(0, imgs.length)].attribs.src;
    })
}



