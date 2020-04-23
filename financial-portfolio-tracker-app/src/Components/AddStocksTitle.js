import React, { Component } from 'react'
import axios from 'axios';
import './AddStockTitle.css';
import Modal from './Modal';


class AddStocksTitle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stocks: [],
            currentData: [],
            isShowing: false,
            companyName: '',
            companySymbol: ''
        }
    }

    componentDidMount() {
        axios.get(`https://financial-portfolio-trac-3ec87.firebaseio.com/stocks.json`)
            .then(res => {
                const stocks = res.data;
                this.setState({ stocks });
            })
    }

    openModalSymbolHandler = (e) => {
        const symbol = e.target.name;
        const company = e.target.id;
        this.setState({
            isShowing: true,
            companySymbol: symbol,
            companyName: company,
        });
    }

closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
}


render() {
    return (
        <div className="AddStockTitle">
            {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
             <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}
                companyName={this.state.companyName}
                companySymbol={this.state.companySymbol}
            >
                    </Modal>
                    <hr className="line"/>
            <h1>Add Stocks to my stocks</h1>
            <div className="allStocks">
                <ul>
                    {this.state.stocks.map((stock, index) =>
                            <li key={index}><button className="StockButton"  onClick={this.openModalSymbolHandler} name={this.state.stocks[index].symbol}
                             id={this.state.stocks[index].name}>{stock.symbol}</button>
                            <span id="companyName">{stock.name}</span></li>

                    )}
                </ul>
            </div>

        </div>
    )
}
}

export default AddStocksTitle
