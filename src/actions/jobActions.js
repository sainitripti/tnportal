import axios from 'axios';

import {
    JOB_UPDATING,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL
} from './types';


//Get all jobs
export const getJobs = () => (dispatch, getState) => {
    
    //Jobs updating
    dispatch({ type: JOB_UPDATING });

    axios.get('http://localhost:5000/api/jobs', tokenConfig(getState))
        .then(res => dispatch({
            type: JOB_UPDATE_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: JOB_UPDATE_FAIL
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