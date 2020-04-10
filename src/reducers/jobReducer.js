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
} from '../actions/types';

const initialState = {
    isUpdating: false,
    jobs: [],
    msg: null
};

export default function(state = initialState, action) {
    switch(action.type){
        case JOB_UPDATING: 
            return {
                ...state,
                isUpdating: true
            };
        case JOB_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                jobs: action.payload
            };
        case JOB_UPDATE_FAIL:
            return {
                ...state,
                isUpdating: false
            };
        case JOB_ADD_CLEAR:
        case JOB_EDIT_CLEAR:
        case JOB_DELETE_CLEAR:
            return {
                ...state,
                msg: null
            };
        case JOB_ADD_SUCCESS:
        case JOB_ADD_FAIL:
        case JOB_EDIT_SUCCESS:
        case JOB_EDIT_FAIL:
        case JOB_DELETE_SUCCESS:
        case JOB_DELETE_FAIL:
            return {
                ...state,
                msg: action.payload.msg
            };
        default:
            return state;
    }
}