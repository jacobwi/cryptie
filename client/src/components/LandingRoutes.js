import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './home';
import Dashboard from './dashboard';
import Settings from './settings';
import LoginPage from './login';
import LandingPage from './landingPage';
import Layout from './Layout';
import SignupPage from './signup';

const Frame = styled.div`
    margin: 0;
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 20px;
    grid-column: 2;
`

export default class LandingRoutes extends Component {
    render() {
        return (
            <Frame>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/home" component={Layout} />
                </Switch>
            </Frame>
        )
    }
}