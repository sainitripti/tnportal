import {
    JOB_UPDATING,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL
} from '../actions/types';

const initialState = {
    isUpdating: false,
    jobs: []
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
        default:
            return state;
    }
}