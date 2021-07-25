import axios from 'axios';
import { handleError, handleRespose } from './response';

const BASE_URL = 'http://localhost:5000'

const getAll = (resource) => {
    axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleRespose)
    .catch(handleError)

}


const getOne = (resource, id) => {
    console.log(`${BASE_URL}/${resource}/${id}`);

    return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleRespose)
    .catch(handleError)
}



const remove = (resource,id) => {
    return axios
    .delete(`${BASE_URL}/${resource}/${id}`)
    .then(handleRespose)
    .catch(handleError)

}


const signUp = (data) => {
    return axios
    .post(`${BASE_URL}/users/signup`, {
        ...data
    })
    .then(handleRespose)
    .then(handleError)

}




export const apiProvider = {
    getAll,
    getOne,
    remove,
    signUp
}