import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import currencyReducer from './currencyReducer'
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    favorite: favoritesReducer,
    currency: currencyReducer
})