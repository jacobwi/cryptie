import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    color: white;
    position: absolute;
    left: 44%;
    top: 40%;
    display: flex;

    & p {
        color: gray;
        padding: 0 20px;
    }

    & i {
        font-size: 1.4em;
    }
`

export default class Loading extends Component {
    render() {
        return (
        <Container>
            <p>Please Wait</p>
            <Icon name="spinner" loading/>
        </Container>
        )
    }
}
