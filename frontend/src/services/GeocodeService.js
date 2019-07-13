import HttpService from "./HttpService";

export default {
    getCityByLatLng,
    getLatLngByAddress,
    getPosition,
    getDistanceByLatLngs
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

function getDistanceByLatLngs(originLocation, destinationLocation) {
    return fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originLocation.lat},${originLocation.lng}&destinations=${destinationLocation.lat}%2C${destinationLocation.lng}&key=${API_KEY}`, {'mode': 'no-cors'})
    .then(res => {
        console.log(res.json());
        console.log(res.json().rows[0].elements[0].distance.text);
    })
}
