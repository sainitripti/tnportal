import axios from 'axios';

import {
    RESULT_UPDATING,
    RESULT_UPDATE_SUCCESS,
    RESULT_UPDATE_FAIL,
    RESULT_ADD_SUCCESS,
    RESULT_ADD_FAIL,
    RESULT_ADD_CLEAR,
    RESULT_EDIT_CLEAR,
    RESULT_EDIT_SUCCESS,
    RESULT_EDIT_FAIL
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

//Post result
export const addNewResult = ({companyName, dateOfAnnouncement, numTotalSelects, numIntern, numFTE, ctcIntern, ctcFTE, isMassRecruitment, arIntern, arFTE, profile}) => (dispatch, getState) => {
    
    //Clear previous messages
    dispatch({ type: RESULT_ADD_CLEAR });

    //Request body
    const body = JSON.stringify({companyName, dateOfAnnouncement, numTotalSelects, numIntern, numFTE, ctcIntern, ctcFTE, isMassRecruitment, arIntern, arFTE, profile});
    axios.post('http://localhost:5000/api/results', body, tokenConfig(getState))
        .then(res => dispatch({
            type: RESULT_ADD_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: RESULT_ADD_FAIL,
                payload: err.response.data
            });
        })
}

//Modify exisiting result with result id
export const modifyResult = (resultId, {companyName, dateOfAnnouncement, numTotalSelects, numIntern, numFTE, ctcIntern, ctcFTE, isMassRecruitment, arIntern, arFTE, profile}) => (dispatch, getState) => {

    //Clear previous messages
    dispatch({ type: RESULT_EDIT_CLEAR });

    //Request body
    const body = JSON.stringify({companyName, dateOfAnnouncement, numTotalSelects, numIntern, numFTE, ctcIntern, ctcFTE, isMassRecruitment, arIntern, arFTE, profile});
    axios.put(`http://localhost:5000/api/results/${resultId}` , body, tokenConfig(getState))
        .then(res => dispatch({
            type: RESULT_EDIT_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: RESULT_EDIT_FAIL,
                payload: err.response.data
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