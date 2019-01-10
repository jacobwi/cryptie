import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Layout from './Layout';
import { connect } from 'react-redux';
import { getCurriencies, getFavorties } from '../actions'
class App extends Component {
  componentDidMount() {
    this.props.getCurriencies();
    this.props.getFavorties();
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
  currency: state.currency
})

export default connect(mapStateToProps, { getCurriencies,getFavorties })(App);