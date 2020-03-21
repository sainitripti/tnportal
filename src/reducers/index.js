import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import companyReducer from './companyReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    company: companyReducer
});