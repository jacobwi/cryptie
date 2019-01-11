import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';
import currencyReducer from './currencyReducer'
import authReducer from './authReducer';
import errorReducer from './errorReducer';
export default combineReducers({
    auth: authReducer,
    favorite: favoriteReducer,
    currency: currencyReducer,
    errors: errorReducer
})