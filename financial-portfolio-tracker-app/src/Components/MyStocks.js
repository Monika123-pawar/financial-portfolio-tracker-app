import React, { Component } from 'react';
import './MyStocks.css';
import axios from 'axios';

class MyStocks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mystock:[],
            id:'',
            name:'',
        }        
        this.stopTracking=this.stopTracking.bind(this);
    }
    componentDidMount() {
        axios.get(`https://financial-portfolio-trac-3ec87.firebaseio.com/mystock.json`)
        .then(res => {
            const mystock = res.data;
            this.setState({ mystock });
            console.log(mystock);
        })
    }
    stopTracking(e){
      this.setState({
          id:e.target.value,
          name:e.target.name
    
    })
        console.log(this.state.id);
        console.log(this.state.name);
        axios.delete(`https://financial-portfolio-trac-3ec87.firebaseio.com/mystock/${this.state.id}.json`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

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
                   
                   {(this.state.mystock==null)?(<tbody><tr><td><h1> No stock have been added </h1></td></tr></tbody>):(<tbody>
                    {Object.keys(this.state.mystock).map((mystock,index)=>
                        <tr key={index}>
                        <td className="Td">{this.state.mystock[mystock].companySymbol}</td>
                        <td className="Td">{this.state.mystock[mystock].name}</td>
                        <td className="Td">{this.state.mystock[mystock].InputNoShares}</td>
                        <td className="Td">{this.state.mystock[mystock].InputBuyPrice}</td>
                        <td className="Td">1</td>
                        <td className="Td">1</td>
                        <td className="Td"><button value={index} name={this.state.mystock[mystock].name} className="stopTrackingBtn" onClick={this.stopTracking}>Stop Tracking</button></td>

                        </tr>
                        )}
                        </tbody>
                        )
                    }
                </table>
            </div>
        )
    }
}

export default MyStocks
