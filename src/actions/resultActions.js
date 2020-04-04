import axios from 'axios';

import {
    RESULT_UPDATING,
    RESULT_UPDATE_SUCCESS,
    RESULT_UPDATE_FAIL
} from './types';


//Get all results
export const getResults = () => (dispatch, getState) => {
    
    //Jobs updating
    dispatch({ type: RESULT_UPDATING });

    axios.get('http://localhost:5000/api/results', tokenConfig(getState))
        .then(res => dispatch({
            type: RESULT_UPDATE_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: RESULT_UPDATE_FAIL
            });
        })
}
//Setup config/headers and token
export const tokenConfig = getState => {

    //Get token from localstorage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    //If token, add to header
    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}