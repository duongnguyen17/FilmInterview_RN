import axios from "axios";
import { BASE_URL } from "./common";

const Axios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-type': 'application/json'
    }
})


Axios.interceptors.request.use(
    (config) => {
        console.log(`[START][${config.url}]`)
        return config;
    }
    ,
    (error) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    (response) => {
        console.log(`[END][${response.config.url}]`)
        console.log(response)
        return response;
    }, (error) => {
        return Promise.reject(error);
    });

export default Axios;