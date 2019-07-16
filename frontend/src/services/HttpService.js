import router from '@/router'

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3000/api/'


import Axios from 'axios';
var axios = Axios.create({
    withCredentials: true
});


async function ajax(endpoint, method = 'get', data = null) {
    try {
        // console.log('user at HTTP Service:', data)
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        console.log('data from HTTP-service after promise:', res.data);
        return res.data;
    } catch (err) {
        console.log('http service got error:', err);
        if (err.response.status === 401) {
            router.push('/');
        } else {
            return Promise.reject('error happend: ', err)
        }
    }
}

export default {
    ajax
}