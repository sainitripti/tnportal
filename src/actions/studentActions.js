import axios from 'axios';

import {
    STUDENT_UPDATING,
    STUDENT_UPDATE_SUCCESS,
    STUDENT_UPDATE_FAIL
} from './types';


//Get all results
export const getStudent = (enrollmentNum) => (dispatch, getState) => {
    
    dispatch({ type: STUDENT_UPDATING });

    axios.get(`https://tnpportal-backend-igdtuw.herokuapp.com/api/students/${enrollmentNum}`, tokenConfig(getState))
        .then(res => dispatch({
            type: STUDENT_UPDATE_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: STUDENT_UPDATE_FAIL
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