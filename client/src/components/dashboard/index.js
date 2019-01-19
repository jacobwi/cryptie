import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Header } from 'semantic-ui-react';
import Loading from '../Loading';
import { connect } from 'react-redux';
import _ from 'lodash';
const Container = styled.div`
    color: white;

    & h2, p {
        color: white !important;
    }
`
class Dashboard extends Component {
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

                    {
                        _.isEmpty(this.props.favorite.favorites) ? 
                        <div>You don't have any coins in the favorites. Please go to settings and add your favorite coins.</div>

                        : <div>{(this.props.favorite.favorites).map((item, key) => (
                            <p>{item}</p>
                        ))}</div>
                    }
                </Container>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    favorite: state.favorite
})

export default connect(mapStateToProps)(Dashboard);