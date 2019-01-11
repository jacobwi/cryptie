import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';
import { Transition, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { signIn } from '../../actions';
import Avatar from '../../assets/avatar.png';

/* START: CSS in JS */
const Main = styled.div`
  margin: 40px auto;

`
const SignupContainer = styled.div`

    background-color: rgba(255, 255, 255, 0.78);
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    & .form {
        padding: 40px 60px;
        background: white;
        
        h2 {
            text-align: center;
            margin-bottom: 40px;
            color: orange;
        }      
        & input {

            background: transparent;
            border: none;
            border-bottom: #242B39 solid 1px;
            &:focus {
                border-top-left-radius: 10px;
                border-top-right-radius: 40px;
                background-color: rgba(255, 255, 255, 0.2);
                border-bottom: #242B39 solid 1px;
            }
        }
    }
    & .button {
        margin-top: 200px;
        padding: 10px;
        height: 40px;
        width: 100%;
        border-radius: 10px;
        background: white;
        border: 1px solid #242B39;
        color: #242B39 !important; 
        text-transform:uppercase;
        font-family: 'Ubuntu', sans-serif;
        cursor:pointer;
        &:hover {
            background-color: #242B39;
            border-color: #242B39;
        }
        & .icon {
            color: rgb(221, 221, 221); 
        }
    } 
`

const AvatarContainer = styled.div`
    padding: 40px 40px;
    margin-top: 20px;
    & img {
        width: 100%;
        height: auto;
    }
`

const ArrowButton = styled(Link)`
    position: absolute;
    left: 0;
    top: 0;
    padding: 30px;
    color: #242B39;
    font-size: 2em;
    &:hover {
        color: orange;
    }
`
/* END: CSS in JS */

class LoginPage extends Component {
    constructor() {
        super();
        this.state = { 
            visible: false,
            email: '',
            password: '',
            errors: ''
        }
    }
    componentDidMount() {
        console.log("login")
        this.setState({
            visible: true
        })
    }
    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
            this.setState({
                errors: newProps.errors
            })
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        const User = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.signIn(User, this.props.history)
    }
    render() {
        const { visible, errors } = this.state
        return (
        <Main>
            <ArrowButton to="/">
                <Icon className='icon' name='arrow left' />
            </ArrowButton>
            <SignupContainer>
                <Transition visible={visible} animation='fade up' duration={2000}>
                    <AvatarContainer>
                    
                        <img src={Avatar} alt="upload"/>
                    
                    </AvatarContainer>
                </Transition>
                <Transition visible={visible} animation='scale' duration={1000}>
                    <form className="form" onSubmit={this.onSubmit}>
                        <h2>LOGIN</h2>

                        <Input fluid icon='mail' iconPosition='left' placeholder='Email' 
                            type="email" name="email" value={this.state.email} onChange={this.onChange}
                            className={classnames('', {
                                'error': errors.email
                            })}
                        />
                        <p>{errors.email && errors.email}</p>     
                        <br />
                        <Input fluid icon='lock' iconPosition='left' placeholder='Password'
                            type="password" name="password" value={this.state.password} onChange={this.onChange}
                            className={classnames('', {
                                'error': errors.password
                            })}
                        />
                        <p>{errors.password && errors.password}</p>                        
                        <br />

                        <Button  animated='vertical' className="button">
                            <Button.Content visible>Login</Button.Content>
                            <Button.Content hidden>
                                <Icon className='icon' name='sign-in' />
                            </Button.Content>
                        </Button> 
                    </form>
                </Transition>
                    
            </SignupContainer>

        </Main>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    favorite: state.favorite
})

export default connect(mapStateToProps, { signIn })(LoginPage);