import React, { Component } from 'react'
import AddStocksTitle from './AddStocksTitle';
import MyStocks from './MyStocks';
import './Modal.css';

 class Main extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            
         }
     }
      
    
    render() {
        return (
            <div >
            
                 <AddStocksTitle/>
                

            </div>
        )
    }
}

export default Main
