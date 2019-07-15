// import HttpService from "./HttpService";

export default {
    getCityByLatLng,
    getLatLngByAddress,
    getPosition,
    getDistanceByLatLngs,
    calulateDistance
}

const API_KEY = 'AIzaSyAQz_Zc9Ys9pFeNAYxOhagonVUGOyg_zlg';

function getCityByLatLng(lat, lng) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`)
    .then(res => (res.json()))
    .then(resData => {
        const city = resData.results.find ((components) => {
            return components.types.includes("locality")
            })
        return city.formatted_address;
    })
    .catch((err) => {
        console.log('there is a problam', err);
    })
}

function getLatLngByAddress(address) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`)
        .then(res => (res.json()))
        .then(resData => (resData.results[0].geometry.location))
        .catch((err) => {
            console.log('there is a problam', err);
        })
}

function getPosition() {
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

