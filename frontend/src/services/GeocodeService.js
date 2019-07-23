import axios from 'axios';

export default {
    getCityByLatLng,
    getLatLngByAddress,
    getPosition
}

const API_KEY = 'AIzaSyAQz_Zc9Ys9pFeNAYxOhagonVUGOyg_zlg';

async function getCityByLatLng(lat, lng) {
    try {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`);
        const data = res.data;
        const city = data.results.find ((components) => components.types.includes("locality"));
        return city.formatted_address;
    }
    catch(err) {
        console.log('there is a problam', err);
    }
}

async function getLatLngByAddress(address) {
    try {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`);
        const data = res.data;
        return data.results[0].geometry.location;
    }
    catch(err) {
        console.log('there is a problam', err);
    }
}

function getPosition() {
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}