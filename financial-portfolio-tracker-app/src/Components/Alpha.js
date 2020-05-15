import React, { Component, Fragment } from 'react'
import axios from 'axios';
import './MyStocks.css';

class Alpha extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPrice: '',
            profitLoss: '',
        }
    }

    componentDidMount() {
        const api_key = 'YI2ECTED6AVWOUHF';
        const api_symbol = this.props.symbol;
        const date = this.props.date;
        const noShare = this.props.noShare;
        const buyPrice = this.props.buyPrice;
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${api_symbol}&apikey=${api_key}`)
            .then(res => {
                console.log(res.data);
                const price = res.data['Time Series (Daily)'][date]['4. close'];
                console.log(price);
                this.setState({
                    currentPrice: price,
                    profitLoss:(this.state.currentPrice - buyPrice) * noShare
                });
             
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <Fragment>
                <td className="Td">{this.state.currentPrice}</td>
                <td className="Td">{this.state.profitLoss}</td>
            </Fragment>
        )
    }
}

export default Alpha
