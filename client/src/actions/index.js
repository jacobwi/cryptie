import axios from 'axios';

import { SET_CURRENCY, SET_FAVORITES, GET_ERRORS, SET_USER } from './types';
const CRYPTOCOMPARE_API_URI = 'https://min-api.cryptocompare.com/data/all/coinlist';

export const getCurriencies = () => dispatch => {
  const currenciesList = localStorage.getItem('currencies')
  if (!currenciesList) {
    axios.get(CRYPTOCOMPARE_API_URI).then(res => {
      let result = res.data.Data;
      dispatch(setCurrencies(res.data.Data));
      localStorage.setItem('currencies', JSON.stringify({
        result
      }))
    });
  }
  else {
    let { result } = JSON.parse(localStorage.getItem('currencies'))
    dispatch(setCurrencies(result));
  }
}



export const getFavorties = () => dispatch => {
  if (localStorage.getItem('favorites')) {
    let { favorites } = JSON.parse(localStorage.getItem('favorites'));
    dispatch(setFavorites(favorites))
  }
}

export const setCurrencies = currencies => {
    return {
      type: SET_CURRENCY,
      payload: currencies
    };
};

export const setFavorites = favorites => {
    return {
      type: SET_FAVORITES,
      payload: favorites
    };
};


// User actions
export const signIn = (userData, history) => dispatch => {
  axios
  .post('user/login', userData)
  .then(res => {
      const { token } = res.data;
      //tokenSetter(token)
      localStorage.setItem("jwtToken", token)
      //const decoded = jwt_decode(token);
      //dispatch(setUser(decoded));
      history.push('/dashboard');
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
}

export const signOut = () => dispatch => {

dispatch(setUser({}));
//tokenSetter(false);
localStorage.removeItem('jwtToken');

}

export const signUp = (userData, history) => dispatch => {
  
  axios
  .post('user/register', userData)
  .then(res => history.push('/login'))
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
}

export const setUser = decoded => {
  return {
    type: SET_USER,
    payload: decoded
  };
};
