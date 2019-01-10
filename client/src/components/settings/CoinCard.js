import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #242b39;
    display: block;
    color: white;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        cursor: pointer;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

const CoinHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const CoinContent = styled.div`
    & .coinImage {
        width: 50px;
        border-radius: 60px;
        padding: 10px;
        
    }
`



const CoinNameContainer = styled.div`
    font-size: 12px;

`

const CoinSymbolContainer = styled.div`
    justify-self: right;
    font-size: 10px;
    color: orange;
`

export default class CoinCard extends Component {
  render() {
    const {coinList, coin} = this.props
    let currentCoin = coinList[coin]
    return (
        <Container >

            <CoinHeader>
                <CoinNameContainer>{currentCoin.CoinName}</CoinNameContainer>
                <CoinSymbolContainer>{coin}</CoinSymbolContainer>
            </CoinHeader>

            <CoinContent>
                <img className='coinImage' alt={currentCoin} src={`https://www.cryptocompare.com/${currentCoin.ImageUrl}`} />
            </CoinContent>
        </Container>
    )
  }
}
