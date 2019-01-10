import { SIGN_UP, SIGN_IN, SET_USER } from '../actions/types'
import isEmpty from 'lodash/isEmpty';

// IN PRODUCTION ENV SET isAuth.. to false
const INITIAL_STATE = {
    isAuthenticated: true,
    user: {}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state,
                user: action.payload
            }

        case SIGN_IN:
            return {
                ...state,
                user: action.payload
            }

        case SET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}