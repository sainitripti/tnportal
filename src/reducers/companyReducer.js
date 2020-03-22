import {
    COMPANY_UPDATING,
    COMPANY_UPDATE_SUCCESS,
    COMPANY_UPDATE_FAIL
} from '../actions/types';

const initialState = {
    isUpdating: false,
    companies: []
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
        default:
            return state;
    }
}