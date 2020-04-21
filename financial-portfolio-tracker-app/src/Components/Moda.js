import React, { Component } from 'react'
import './Modal.css';
import axios from 'axios'

class Moda extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             symbol:''
        }
    }
    setSymbol(){
        this.setState({symbol:this.props.companySymbol})
    }

    componentDidMount(){
        const api_key = 'YI2ECTED6AVWOUHF';  

      console.log(this.state.symbol) 
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.symbol}&outputsize=full&apikey=${api_key}`)
        .then(res => {
            const Data = res.data;
            console.log(Data)
        })
    }
    render() {
        return (
            <div className="AddStockTitle">
                <div className="modal-wrapper"
                    style={{
                        transform:this. props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity:this. props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>Add  {this.props.companyName} to My Stocks</h3>
                        <span className="close-modal-btn" onClick={this.props.close}>×</span>
                    </div>
                    <div className="modal-body">
                        <form>
                            <table>
                                <tr>
                                    <td><label>Company Name</label></td>
                                    <td> {this.props.companyName},{this.props.companySymbol}</td>
                                </tr>
                                <tr>
                                    <td><label>No.of shares</label></td>
                                    <td><input id="noShares"  type="text" name="noShare" required /></td>
                                </tr>
                                <tr>
                                    <td><label>Buy Price</label></td>
                                    <td><input id="buyPrice"  type="text" name="buyPrice" required /></td>
                                </tr>
                                <tr>
                                    <td><label>Date</label></td>
                                    <td><input  type="date" id="buyDate" required /></td>
                                </tr>
                            </table>
                            <button className="AddButton" >Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moda
