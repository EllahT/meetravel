import HttpService from "./HttpService";

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

function getDistanceByLatLngs(originLocation, destinationLocation) {
    return fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originLocation.lat},${originLocation.lng}&destinations=${destinationLocation.lat}%2C${destinationLocation.lng}&key=${API_KEY}`, {'mode': 'no-cors'})
    .then(res => {
        console.log(res.json());
        console.log(res.json().rows[0].elements[0].distance.text);
    })
}

function calulateDistance(originLocation, destinationLocation) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (originLocation.lat-destinationLocation.lat) * Math.PI / 180;
    var dLon = (originLocation.lng-destinationLocation.lng) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(destinationLocation.lat * Math.PI / 180 ) * Math.cos(originLocation.lat * Math.PI / 180 ) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    if (d>1) return Math.round(d);
    else if (d<=1) return Math.round(d*1000);
    return d;
}
