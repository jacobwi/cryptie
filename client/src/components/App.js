import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Layout from './Layout';
import { connect } from 'react-redux';
import { getCurriencies, getFavorites, setUser } from '../actions';
import tokenSetter from '../utils/tokenSetter';
import store from '../store';

if (localStorage.jwtToken) {
  tokenSetter(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setUser(decoded));
}

class App extends Component {
  componentDidMount() {
    this.props.getCurriencies();
    this.props.getFavorites();
    console.log(this.props.getFavorites())
  }
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  favorite: state.favorite,
  currency: state.currency,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurriencies, getFavorites })(App);