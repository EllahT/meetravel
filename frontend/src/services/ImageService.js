import HttpService from './HttpService';

export default {
    getRandomImg,
    uploadImg
}

const BASE_URL = 'image/';

function getRandomImg() {
    return HttpService.ajax(`${BASE_URL}setRandomImg`);
}

async function uploadImg(ev) {
    const form = new FormData()
    form.append('imgUpload', ev.target.files[0])
    const img = await HttpService.ajax(`${BASE_URL}upload/cloudinary`,'post',form);
    return img.url;
}
