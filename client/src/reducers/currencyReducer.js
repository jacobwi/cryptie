import { SET_CURRENCY, GET_CURRENCY } from '../actions/types';

const INITIAL_STATE = {
    currencies: {}
}
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CURRENCY:
          return action.payload;
        case SET_CURRENCY:
            return {
                ...state,
                currencies: action.payload
            }
        default:
          return state;
    }
}