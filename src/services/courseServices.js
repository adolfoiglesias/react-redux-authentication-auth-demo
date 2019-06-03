import axios from 'axios';
import {FINDALL_URL} from '../utils';

/*
const findAll = () => async() => {
    // ref: https://flaviocopes.com/axios/
    // ref : https://github.com/axios/axios
    const response = await axios.get(FINDALL_URL, {}) ;
    return response;
}*/

const findAll = () =>  {
    // ref: https://flaviocopes.com/axios/
    // ref : https://github.com/axios/axios
    const response =  axios.get(FINDALL_URL, {}) ;
    return response;
}

export const courseServices = {
    findAll
}



