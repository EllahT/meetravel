import HttpService from './HttpService';

export default {
    getRandomImg,
    uploadImg
}

const BASE_URL = 'image/';

function getRandomImg(term) {
    return HttpService.ajax(`${BASE_URL}setRandomImg/${term}`);
}

async function uploadImg(ev) {
    const form = new FormData()
    form.append('imgUpload', ev.target.files[0])
    const img = await HttpService.ajax(`${BASE_URL}upload/cloudinary`,'post',form);
    return img.url;
}
