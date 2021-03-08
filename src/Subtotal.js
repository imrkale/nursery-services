import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider.js';
import { getBasketTotal } from './reducer.js';
import { useHistory } from 'react-router-dom'

export default function Subtotal() {

    const [{basket},dispatch]=useStateValue();
    const history=useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    
                    </>
                )}
                decimalScale={2}
                
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button onClick={e=>history.push("/payment")}>Proceed to checkout</button>
        </div>
    )
}
