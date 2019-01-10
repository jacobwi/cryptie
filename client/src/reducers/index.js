import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import currencyReducer from './currencyReducer'
import authReducer from './authReducer';
import errorReducer from './errorReducer';
export default combineReducers({
    auth: authReducer,
    favorite: favoritesReducer,
    currency: currencyReducer,
    errors: errorReducer
})