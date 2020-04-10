import React, { Component } from 'react';
import './MyStocks.css';
import axios from 'axios';

class MyStocks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            symbol:'',
            name: '',
            noOfShare: '',
            buyPrice: '',
            currentPrice: '',
            profitLoss: '',
        }        
    }

    getData(){

    }
   
    componentDidMount() {
        axios.post(`https://financial-portfolio-trac-3ec87.firebaseio.com/Mystocks/MyStock.json`, { })
            .then(function (response) {
                console.log('monika');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
 


    render() {
        return (
            <div className="MyStocks">
                <table className='MyStocksTable'>
                    <thead>
                        <tr className="MyStocksTr">
                            <th className="MyStocksTh">Stock symbol</th>
                            <th className="MyStocksTh">Stock name</th>
                            <th className="MyStocksTh">No.of shares</th>
                            <th className="MyStocksTh">Buy price</th>
                            <th className="MyStocksTh">Current price</th>
                            <th className="MyStocksTh">Profit/Loss</th>
                            <th className="MyStocksTh"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="Td">1</td>
                            <td className="Td">{this.state.name}</td>
                            <td className="Td">1</td>
                            <td className="Td">1</td>
                            <td className="Td">1</td>
                            <td className="Td">1</td>
                            <td className="Td"><button className="stopTracking">Stop Tracking</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyStocks
