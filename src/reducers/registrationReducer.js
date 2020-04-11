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
} from '../actions/types';

const initialState = {
    isUpdating: false,
    registrations: [],
    msg: null
};

export default function(state = initialState, action) {
    switch(action.type){
        case REGISTRATION_UPDATING: 
            return {
                ...state,
                isUpdating: true
            };
        case REGISTRATION_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                registrations: action.payload
            };
        case REGISTRATION_UPDATE_FAIL:
            return {
                ...state,
                isUpdating: false
            };
        case REGISTRATION_ADD_CLEAR:
        case REGISTRATION_DELETE_CLEAR:
            return {
                ...state,
                msg: null
            };
        case REGISTRATION_ADD_SUCCESS:
        case REGISTRATION_ADD_FAIL:
        case REGISTRATION_DELETE_SUCCESS:
        case REGISTRATION_DELETE_FAIL:
            return {
                ...state,
                msg: action.payload.msg
            };
        default:
            return state;
    }
}