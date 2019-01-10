import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Loading from '../Loading';
import CoinCard from './CoinCard';
import { Icon, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFavorites } from '../../actions';

const Container = styled.div`
    color: white;

    & h2, p {
        color: white !important;
    }

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 10px;

    & .card {
        .overlay {
            
            font-size: 2em;
        }
        &:hover {
            cursor: pointer;

            & .overlay {
                opacity: 1;
                transition: all 500ms linear;
            }
        }
        width: 100%;
        height: 80%;
       
    }
`

const Overlay = styled.div`
    text-align: center;
    position: relative;
    z-index: 99;
    bottom: 70px;
    opacity: 0;
`

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            coinsMetaData: {},
            finishedLoading: false,
            renderCoins: this.renderCoins,
            favorites: [],
            handleAdd: this.handleAdd,
            handleRemove: this.handleRemove,
            isInFavorites: this.isInFavorites
        };
    }
    componentDidMount() {
        this.setState({
            coinsMetaData: this.props.currency.currencies,
            favorites: this.props.favorite.favorties,
            finishedLoading: true
        })

    }

    isInFavorites = key => {
        return _.includes(this.state.favorites, key)
    }

    renderCoins = (coinList) => {
        return Object.keys(coinList).slice(0, 20)
    }

    renderFavorties = (favorites) => {
        return favorites
    }

    handleAdd = async (coin) => {

        let favorites = [...this.state.favorites]
        favorites.push(coin)
        await this.setState({
            favorites: favorites
        })
        localStorage.setItem('favorites', JSON.stringify({
            favorites
        }))
        this.props.setFavorites(this.state.favorites)
    }

    handleRemove = async (coin) => {
        let favorites = [...this.state.favorites]
        await this.setState({
            favorites: _.pull(favorites, coin)
        })

        this.props.setFavorites(this.state.favorites)
    }

    render() {
        const {  coinsMetaData, finishedLoading, renderCoins,favorites, handleAdd, handleRemove, isInFavorites } = this.state

        if (finishedLoading) {
            return (
                <Container>
                    <Header as='h2'>
                        <Icon name='settings' color='grey' />
                        <Header.Content>
                            Settings

                        </Header.Content>
                    </Header>
                    <h1>Favorites</h1>
                    <Grid favorites>
                        {this.renderFavorties(favorites).map(coin => (
                            <div className='card'  key={coin} onClick={() => handleRemove(coin)}>

                                <CoinCard coin={coin} coinList={coinsMetaData} />
                                <Overlay className="overlay">
                                    <Icon name="minus"/>
                                </Overlay>
                            </div>

                        ))}
                    </Grid>
                    <h1>Select</h1>
                    <Grid>
                        {renderCoins(coinsMetaData).map(coin => (
                            !isInFavorites(coin) && 
                                <div className='card' key={coin} onClick={() => handleAdd(coin)}>
                                    <CoinCard coin={coin} coinList={coinsMetaData} />
                                    <Overlay className="overlay">
                                        <Icon name="plus"/>
                                    </Overlay>
                                </div>
                        ))}
                    </Grid>
                </Container>

            )
        }
        else {
            return (
                <div>
                    <Loading />
                </div>
           )
        }
        
    }
}

const mapStateToProps = (state) => ({
    favorite: state.favorite,
    currency: state.currency
  })
  
export default connect(mapStateToProps, { setFavorites })(Settings);