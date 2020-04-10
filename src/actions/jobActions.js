import axios from 'axios';

import {
    JOB_UPDATING,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_ADD_CLEAR,
    JOB_ADD_SUCCESS,
    JOB_ADD_FAIL,
    JOB_EDIT_CLEAR,
    JOB_EDIT_SUCCESS,
    JOB_EDIT_FAIL,
    JOB_DELETE_CLEAR,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL
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


//Post job
export const addNewJob = ({
    drive,
    profile,
    role,
    location,
    domain,
    targetBatchYear,
    targetCourses,
    visitDate,
    lastDateToRegister,
    dateOfJobPosting,
    compensationOffered,
    eligibilityCriteria,
    selectionProcedure,
    description,
    otherInfoForStudents}) => (dispatch, getState) => {
    
    //Clear previous messages
    dispatch({ type: JOB_ADD_CLEAR });

    //Request body
    const body = JSON.stringify({
        drive,
        profile,
        role,
        location,
        domain,
        targetBatchYear,
        targetCourses,
        visitDate,
        lastDateToRegister,
        dateOfJobPosting,
        compensationOffered,
        eligibilityCriteria,
        selectionProcedure,
        description,
        otherInfoForStudents});
    axios.post('http://localhost:5000/api/jobs', body, tokenConfig(getState))
        .then(res => dispatch({
            type: JOB_ADD_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: JOB_ADD_FAIL,
                payload: err.response.data
            });
        })
}

//Modify exisiting job with job id
export const modifyJob = (jobId, {companyName, dateOfAnnouncement, numTotalSelects, numIntern, numFTE, ctcIntern, ctcFTE, isMassRecruitment, arIntern, arFTE, profile}) => (dispatch, getState) => {

    //Clear previous messages
    dispatch({ type: JOB_EDIT_CLEAR });

    //Request body
    const body = JSON.stringify({companyName, dateOfAnnouncement, numTotalSelects, numIntern, numFTE, ctcIntern, ctcFTE, isMassRecruitment, arIntern, arFTE, profile});
    axios.put(`http://localhost:5000/api/jobs/${jobId}` , body, tokenConfig(getState))
        .then(res => dispatch({
            type: JOB_EDIT_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: JOB_EDIT_FAIL,
                payload: err.response.data
            });
        })
}

//Delete job with jobId
export const deleteJob = (jobId) => (dispatch, getState) => {
    
    //Clear previous messages
    dispatch({ type: JOB_DELETE_CLEAR });

    //Request body
    axios.delete(`http://localhost:5000/api/jobs/${jobId}` , tokenConfig(getState))
        .then(res => dispatch({
            type: JOB_DELETE_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: JOB_DELETE_FAIL,
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