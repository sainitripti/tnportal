import {
    RESULT_UPDATING,
    RESULT_UPDATE_SUCCESS,
    RESULT_UPDATE_FAIL,
    RESULT_ADD_CLEAR,
    RESULT_ADD_SUCCESS,
    RESULT_ADD_FAIL
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
            return {
                ...state,
                msg: null
            };
        case RESULT_ADD_SUCCESS:
        case RESULT_ADD_FAIL:
            return {
                ...state,
                msg: action.payload.msg
            };
        default:
            return state;
    }
}