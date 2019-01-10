import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    color: white;

    & h2, p {
        color: white !important;
    }
`

export default class Home extends Component {

    render() {
        return (
        <Container>
            <Header as='h2'>
                <Icon name='home' color="grey"/>
                <Header.Content>
                    Home
                </Header.Content>
            </Header>
        </Container>
        )
    }
}
