import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


/* START: CSS in JS */

const Main = styled.div`
    position: absolute;
    left: 4%;
    margin: 100px auto;
    max-width: 900px;
    h1 {
        text-align: center;
        color: white;
    }
    & .features {
        color: white; 
        margin: 0 auto !important;
        display: grid !important;
        grid-template-columns: 1fr 1fr 1fr !important;
        grid-column-gap: 140px;
        text-align: center;
        padding: 100px;
        & .icon-feature {
            color: #242B39; 
            font-size: 4em;
        }
    }
    & .button {
        height: 40px;
        width: 180px;
        background: transparent;
        border: 1px solid #242B39;
        border-radius: 8px;
        color: white !important; 
        text-transform: uppercase;
        font-family: 'Ubuntu', sans-serif;
        cursor:pointer;
        margin-left: 40px;
        &:hover {
            background-color:#242B39;
            border-color: #242B39;
        }
        & .icon {
            color: rgb(221, 221, 221); 
        }
    } 
`
const ButtonsContainer = styled.div`
    display: inline-block;
    text-align: center;
`


/* END: CSS in JS */

export default class LandingPage extends Component {
    state = { visible: false }
    componentDidMount() {

        this.setState({
            visible: true
        })
    }
    render() {
        const { visible } = this.state
        return (
        <Main>  
            <h1>Welcome to App</h1>
            <Transition visible={visible} animation='fade up' duration={2000}>
                <div className="features">
                    <div className="grid-item">
                        <Icon className='icon-feature' name='paper plane outline' />
                        <h2>Fast Event Creation</h2>
                    </div>
                    <div className="grid-item">
                        <Icon className='icon-feature' name='tv' />
                        <h2>Live Stream</h2>
                    </div>
                    <div className="grid-item">
                        <Icon className='icon-feature' name='share' />
                        <h2>Share it</h2>
                    </div>
                </div>
            </Transition>

            <Transition visible={visible} animation='fade up' duration={2400}>
                <ButtonsContainer>
                    <Link to="/login">
                        <Button animated='vertical' className="button">
                            <Button.Content visible>Login</Button.Content>
                            <Button.Content hidden>
                                <Icon className='icon' name='sign-in' />
                            </Button.Content>
                        </Button> 
                    </Link>
                    <Link to="/signup">
                        <Button animated='vertical' className="button">
                            <Button.Content visible>New Account</Button.Content>
                            <Button.Content hidden>
                                <Icon className='icon' name='newspaper outline' />
                                </Button.Content>
                        </Button> 
                    </Link>
                </ButtonsContainer>
            </Transition>
        </Main>
        )
    }
}


