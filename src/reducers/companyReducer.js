import {
    COMPANY_UPDATING,
    COMPANY_UPDATE_SUCCESS,
    COMPANY_UPDATE_FAIL,
    COMPANY_ADD_CLEAR,
    COMPANY_ADD_SUCCESS,
    COMPANY_ADD_FAIL
} from '../actions/types';

const initialState = {
    isUpdating: false,
    companies: [],
    msg: null
};

export default function(state = initialState, action) {
    switch(action.type){
        case COMPANY_UPDATING: 
            return {
                ...state,
                isUpdating: true
            };
        case COMPANY_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                companies: action.payload
            };
        case COMPANY_UPDATE_FAIL:
            return {
                ...state,
                isUpdating: false
            };
        case COMPANY_ADD_CLEAR:
            return {
                ...state,
                msg: null
            }
        case COMPANY_ADD_SUCCESS:
        case COMPANY_ADD_FAIL:
            return {
                ...state,
                msg: action.payload.msg
            }
        
        default:
            return state;
    }
}