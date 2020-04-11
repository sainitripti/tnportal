import axios from 'axios';

import {
    REGISTRATION_UPDATING,
    REGISTRATION_UPDATE_SUCCESS,
    REGISTRATION_UPDATE_FAIL,
    REGISTRATION_ADD_CLEAR,
    REGISTRATION_ADD_SUCCESS,
    REGISTRATION_ADD_FAIL,
    REGISTRATION_DELETE_CLEAR,
    REGISTRATION_DELETE_SUCCESS,
    REGISTRATION_DELETE_FAIL
} from './types';

//Get all registrations
export const getRegistrations = () => (dispatch, getState) => {
    
    //Jobs updating
    dispatch({ type: REGISTRATION_UPDATING });

    axios.get('http://localhost:5000/api/registrations', tokenConfig(getState))
        .then(res => dispatch({
            type: REGISTRATION_UPDATE_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: REGISTRATION_UPDATE_FAIL
            });
        })
}


//Register for a drive
export const registerForDrive = ({drive, enrollmentNum}) => (dispatch, getState) => {
    
    //Clear previous messages
    dispatch({ type: REGISTRATION_ADD_CLEAR });

    //Request body
    const body = JSON.stringify({drive, enrollmentNum});
    axios.post('http://localhost:5000/api/registrations', body, tokenConfig(getState))
        .then(res => dispatch({
            type: REGISTRATION_ADD_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: REGISTRATION_ADD_FAIL,
                payload: err.response.data
            });
        })
}

//Unregister from drive
export const unregisterForDrive = ({drive, enrollmentNum}) => (dispatch, getState) => {
  
    //Clear previous messages
    dispatch({ type: REGISTRATION_DELETE_CLEAR });

    //Request body
    const body = JSON.stringify({drive, enrollmentNum});
    axios.delete('http://localhost:5000/api/registrations', body, tokenConfig(getState))
        .then(res => dispatch({
            type: REGISTRATION_DELETE_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: REGISTRATION_DELETE_FAIL,
                payload: err.response.data
            });
        })
}
 
//Setup config/headers and token
export const tokenConfig = getState => {

    //Get token from localstorage
    const token = getState().auth.token;

    //Headers
    let config = {
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