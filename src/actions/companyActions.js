import axios from 'axios';

import {
    COMPANY_UPDATING,
    COMPANY_UPDATE_SUCCESS,
    COMPANY_UPDATE_FAIL
} from './types';


//CGet all companies
export const getCompanies = () => (dispatch, getState) => {
    
    //Companies updating
    dispatch({ type: COMPANY_UPDATING });

    axios.get('http://localhost:5000/api/companies', tokenConfig(getState))
        .then(res => dispatch({
            type: COMPANY_UPDATE_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            //dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: COMPANY_UPDATE_FAIL
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