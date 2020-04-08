import {
    RESULT_UPDATING,
    RESULT_UPDATE_SUCCESS,
    RESULT_UPDATE_FAIL,
    RESULT_ADD_CLEAR,
    RESULT_ADD_SUCCESS,
    RESULT_ADD_FAIL,
    RESULT_EDIT_CLEAR,
    RESULT_EDIT_SUCCESS,
    RESULT_EDIT_FAIL,
    RESULT_DELETE_CLEAR,
    RESULT_DELETE_SUCCESS,
    RESULT_DELETE_FAIL
} from '../actions/types';

const initialState = {
    isUpdating: false,
    results: [],
    msg: null
};

export default function(state = initialState, action) {
    switch(action.type){
        case RESULT_UPDATING: 
            return {
                ...state,
                isUpdating: true
            };
        case RESULT_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                results: action.payload
            };
        case RESULT_UPDATE_FAIL:
            return {
                ...state,
                isUpdating: false
            };
        case RESULT_ADD_CLEAR:
        case RESULT_EDIT_CLEAR:
        case RESULT_DELETE_CLEAR:
            return {
                ...state,
                msg: null
            };
        case RESULT_ADD_SUCCESS:
        case RESULT_ADD_FAIL:
        case RESULT_EDIT_SUCCESS:
        case RESULT_EDIT_FAIL:
        case RESULT_DELETE_SUCCESS:
        case RESULT_DELETE_FAIL:
            return {
                ...state,
                msg: action.payload.msg
            };
        default:
            return state;
    }
}