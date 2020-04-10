import React from 'react'
import './Modal.css';
import MyStocks from './MyStocks';
import axios from 'axios'

const Modal = (props) => {

    let textInputNoShares = React.createRef();
    let textInputBuyPrice = React.createRef();
    let textInputDate = React.createRef();
  
    let InputNoShares;
    let InputBuyPrice;
    let InputDate;
    const name = props.companyName;;
    const companySymbol = props.companySymbol;


    function addCompanyStock(e) {
        try {
            InputNoShares = textInputNoShares.current.value;
            InputBuyPrice = textInputBuyPrice.current.value;
            InputDate = textInputDate.current.value;
        }
        catch (err) {
            console.log(err);
        }
        if(InputNoShares&&InputBuyPrice&&InputDate){
            setTimeout(() => {
                getCurrentPrice();
            }, 3000);
          
            console.log("pppp");
            postData(name, companySymbol, InputNoShares, InputBuyPrice, InputDate );
        }
        function postData(name, companySymbol, InputNoShares, InputBuyPrice, InputDate) {
            axios.post(`https://financial-portfolio-trac-3ec87.firebaseio.com/Mystocks/MyStock.json`, { name, companySymbol, InputNoShares, InputBuyPrice, InputDate })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        function getCurrentPrice(){
            alert('in')
            const api_key = 'YI2ECTED6AVWOUHF';
            axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=HD&apikey=${api_key}`)
                .then(res => {
                    const Data = res.data;
                    console.log(Data)
                })
        }
    }

    return (
        <div className="AddStockForm">
            <MyStocks name={name}
                symbol={companySymbol}
                noShares={InputNoShares}
                buyPrice={InputBuyPrice}
                buyDate={InputDate}
            />
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Add  {props.companyName} to My Stocks</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>

                <div className="modal-body">
                    <form>
                        <table>
                            <tr>
                                <td><label>Company Name</label></td>
                                <td> {props.companyName}</td>
                            </tr>
                            <tr>
                                <td><label>No.of shares</label></td>
                                <td><input id="noShares" ref={textInputNoShares} type="text" name="noShare" required /></td>
                            </tr>
                            <tr>
                                <td><label>Buy Price</label></td>
                                <td><input id="buyPrice" ref={textInputBuyPrice} type="text" name="buyPrice" required /></td>
                            </tr>
                            <tr>
                                <td><label>Date</label></td>
                                <td><input ref={textInputDate} type="date" id="buyDate" required /></td>
                            </tr>
                        </table>
                        <button className="AddButton" onClick={addCompanyStock}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
