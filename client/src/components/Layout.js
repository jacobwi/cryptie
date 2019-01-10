import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Sidemenu from './sidemenu';
import Routes from './Routes';
import LandingPage from './landingPage';
import LandingRoutes from './LandingRoutes';
import { BrowserRouter as Router} from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  body {
    outline: none;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow-x: hidden !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: scrollbar;
    -webkit-app-region: drag;
    background-color: rgba(36, 40, 56, 0.9);
    font-family: "Avenir Next", "Avenir", sans-serif;
  }
`
const Container = styled.div`

`

const Content = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-column-gap: 60px;
`

class Layout extends Component {
    render() {
        return (
        <Container>
           <GlobalStyle />
          { this.props.auth.isAuthenticated ? 
            <Content>
              <div><Sidemenu /></div>
              <div><Routes /></div>
            </Content>

            :
              <Router>
                <div>                <LandingRoutes />
                </div>
              </Router>
          }

            
        </Container>
        )
    }
}
const mapStateToProps = (state) => ({
  favorite: state.favorite,
  currency: state.currency,
  auth: state.auth
})

export default connect(mapStateToProps)(Layout);