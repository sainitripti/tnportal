import axios from 'axios';

import {
    COMPANY_UPDATING,
    COMPANY_UPDATE_SUCCESS,
    COMPANY_UPDATE_FAIL,
    COMPANY_ADD_CLEAR,
    COMPANY_ADD_SUCCESS,
    COMPANY_ADD_FAIL
} from './types';

//Clear messages
export const clearCompanyMessages = () => (dispatch, getState) => {
    dispatch({ type: COMPANY_ADD_CLEAR});
}

//Get all companies
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

//POST jaf form
export const addCompany = ({
    companyDetails,
    jobDetails,
    eligibility,
    selectionProcedure,
    requirements,
    otherInfoForStudents
}) => (dispatch, getState) => {
    
    dispatch({ type: COMPANY_ADD_CLEAR });

    const body = JSON.stringify({
        companyDetails,
        jobDetails,
        eligibility,
        selectionProcedure,
        requirements,
        otherInfoForStudents
    });


    axios
        .post('http://localhost:5000/api/companies', body, tokenConfig(getState))
        .then(res => dispatch({
            type: COMPANY_ADD_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: COMPANY_ADD_FAIL,
                payload: err.response.data
            });
        })
}

//Setup config/headers and token
export const tokenConfig = getState => {

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    return config;
}