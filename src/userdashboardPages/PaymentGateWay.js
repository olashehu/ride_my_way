import React from 'react'
import './PaymentGateWay.css'

const PaymentGateWay = () => {
    return (
        <div className="payment-user">
            <div className="form-payment-container">
                <h4>Payment</h4>
                <label htmlFor="fname" className="fname">Accepted Cards</label>
                <div className="icons-container">

                </div>
               <form action="" className="form-payment">
                   <div className="child_1">
                        <label htmlFor="cname">Name on Card</label>
                        <input type="text" placeholder="Mohammed Mohammed"/>
                   </div>
                    <div className="child_1">
                        <label htmlFor="cname">Credit card number</label>
                        <input type="text" placeholder="1111 6666 7777 9999"/>
                   </div>
                    <div className="child_1">
                        <label htmlFor="cname">Exp Month</label>
                        <input type="text" placeholder="September"/>
                   </div>
                    <div className="child_1">
                        <label htmlFor="cname">Name on Card</label>
                        <input type="text" placeholder="Mohammed Mohammed"/>
                   </div>
               </form>
            </div>
        </div>
    )
}

export default PaymentGateWay
