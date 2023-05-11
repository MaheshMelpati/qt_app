import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://interviews-g83f.onrender.com/api'

axios.interceptors.request.use(async(req)=>{
    if(localStorage.getItem('loginData')){
        req.headers['Authorization'] = 'Bearer '+ localStorage.getItem('loginData')
    }
    return req
})

axios.interceptors.response.use(null,error =>{
    const respectError = error.response && error.response.status >= 400 && error.response.status < 500
    if(!respectError){
        toast.error('no internent, plz conect internet')
    }
})

export default {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
}