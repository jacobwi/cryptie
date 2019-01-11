import { SET_FAVORITES, GET_FAVORITES } from '../actions/types';

const INITIAL_STATE = {
    isFirstTime: true,
    favorites: {}
}
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_FAVORITES:
          return action.payload;
        case SET_FAVORITES:
            return {
                ...state,
                isFirstTime: false,
                favorites: [...action.payload]
            }
        default:
          return state;
    }
}