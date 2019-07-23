const cheerio = require('cheerio');
const axios = require('axios');
const utilService = require('../../services/util.service');

module.exports = {
    getRandomImage
}

// const TERM = 'travel';

async function getRandomImage(term) {
    try {
        const res = await axios.get(`http://www.istockphoto.com/il/photos/${term}`);
        const data = res.data;
        const $ = cheerio.load(data);
        const imgs = $('img.srp-asset-image');
        return imgs[utilService.getRandomInt(0, imgs.length)].attribs.src;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}



