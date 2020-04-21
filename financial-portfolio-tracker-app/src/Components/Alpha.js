import React, { Component } from 'react'
import axios from 'axios';

class Alpha extends Component {

    componentDidMount() {
        const api_key = 'YI2ECTED6AVWOUHF';
        const api_symbol=this.props.companySymbol;
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${api_symbol}&apikey=${api_key}`)
            .then(res => {
                const Data = res.data;
                console.log(Data)
            })
            console.log('alpha'+this.props.InputDate,this.props.companySymbol)
    }
    
    render() {
        return (
            <div>
           
            </div>
        )
    }
}

export default Alpha
