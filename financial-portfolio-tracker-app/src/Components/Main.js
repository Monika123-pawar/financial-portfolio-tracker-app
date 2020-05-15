import React, { Component } from 'react'
import AddStocksTitle from './AddStocksTitle';
import MyStocks from './MyStocks';
import './Modal.css';

 class Main extends Component {

    render() {
        const nav={
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }
        return (
            <div >
            <h1 style={nav}>Financial Portfolio Tracker</h1>
                <MyStocks/>
                 <AddStocksTitle/>
            </div>
        )
    }
}

export default Main
