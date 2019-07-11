import router from '@/router';

const BASE_URL = (process.env.NODE_ENV !== 'development') 
        ? '/' 
        : 'http://localhost:3000/';
import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true
});


async function ajax(endpoint, method='get', data=null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        if (err.response.status === 401) {
            router.push('/');
        }
    }
}


export default {
    ajax
}