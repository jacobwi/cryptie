import { SET_FAVORITES, GET_FAVORITES } from '../actions/types';

const INITIAL_STATE = {
    isFirstTime: true,
    favorties: {}
}
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_FAVORITES:
          return action.payload;
        case SET_FAVORITES:
            return {
                ...state,
                isFirstTime: false,
                favorties: [...action.payload]
            }
        default:
          return state;
    }
}