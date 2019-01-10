import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Header } from 'semantic-ui-react';
import Loading from '../Loading';

const Container = styled.div`
    color: white;

    & h2, p {
        color: white !important;
    }
`
export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            coinList: ['test']
        };
    }
    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {

    }
    render() {
        if (!this.state.coinList) {
            return (
                <div>
                    <Loading />
                </div>
            )
        } 
        else {
            return (
                <Container>
                    <Header as='h2'>
                        <Icon name='bitcoin' color="grey"/>
                        <Header.Content>
                            Dashboard
                        </Header.Content>
                    </Header>
                </Container>
            )
        }
    }
}
