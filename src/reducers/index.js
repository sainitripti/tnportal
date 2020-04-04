import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import companyReducer from './companyReducer';
import jobReducer from './jobReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    company: companyReducer,
    job: jobReducer
});