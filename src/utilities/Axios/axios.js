import Axios from 'axios'

const instance = Axios.create()
//const api = 

const token = sessionStorage.getItem('user-token')
instance.defaults.timeout = 25000;
instance.defaults.headers.common['Authorization'] = token;
instance.defaults.baseURL = api

export default {
    instance
}