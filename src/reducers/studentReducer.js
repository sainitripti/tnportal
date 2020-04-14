import {
    STUDENT_UPDATING,
    STUDENT_UPDATE_SUCCESS,
    STUDENT_UPDATE_FAIL
} from '../actions/types';

const initialState = {
    isUpdating: false,
    studentDetails: null
};

export default function(state = initialState, action) {
    switch(action.type){
        case STUDENT_UPDATING: 
            return {
                ...state,
                isUpdating: true
            };
        case STUDENT_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                studentDetails: action.payload
            };
        case STUDENT_UPDATE_FAIL:
            return {
                ...state,
                isUpdating: false
            };
        default:
            return state;
    }
}