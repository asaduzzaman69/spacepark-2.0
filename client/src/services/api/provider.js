import axios from 'axios';
import { handleError, handleRespose } from './response';

const BASE_URL = 'http://localhost:5000'

const getAll = (resource) => {
    return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleRespose)
    .catch(handleError)

}


const createOne = (resource, data) => {
    return axios
    .post(`${BASE_URL}/${resource}`, {} , {
        headers: {
            Authorization: 'Bearer ' + data        }
    })
    .then(handleRespose)
    .catch(handleError)
}



const updateOne = (resource, data) => {
    return axios
    .patch(`${BASE_URL}/${resource}`, data)
    .then(handleRespose)
    .catch(handleError)
}

const getOne = (resource, id) => {
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
    signUp,
    createOne,
    updateOne
}