import {
    RESULT_UPDATING,
    RESULT_UPDATE_SUCCESS,
    RESULT_UPDATE_FAIL
} from '../actions/types';

const initialState = {
    isUpdating: false,
    results: []
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
        default:
            return state;
    }
}