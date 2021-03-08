import React, { useState,useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider.js';
import { Link,useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer.js';
import axios from './axios';
import CheckoutProduct from './CheckoutProduct.js'
import CurrencyFormat from 'react-currency-format'
import { db } from './firebase.js';

import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';

function Payment() {
    const history=useHistory();
    const [{user,basket},dispatch]=useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const stripe=useStripe();
    const elements=useElements();

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("Client Scret is",clientSecret)

    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        setProcessing(true);
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details: {
                    address: {
                      city: "New York",
                      country: "US",
                      line1: "No1",
                      line2: "No2",
                      postal_code: "42424",
                      state: "Texas"
                    },
                    email: "itprojectsrmd@gmail.com",
                    name: "Group Project",
                    phone: "9172587279"
                  },
            }
        }).then(({paymentIntent})=>{
           
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type:"EMPTY_BASKET"
            })

            history.replace("/orders")
            // we use replace when we dont want to come back
        })
    }
    const handleChange=e=>
    {
        setDisabled(e.empty);
        setError(e.error?e.error.message:"");
    }
    return (
        <div className="payment">

            <div className="payment_container">
                <h1>
                    Checkout(
                    <Link to="/checkout">{basket?.length}</Link>)
                </h1>

                <div className="payment_section">

                    <div className="payment_title">
                        <h3>Delievery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>RMD College, Warje</p>
                        <p>Pune,Maharashtra</p>
                    </div>

                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delievery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}/>
                        ))
                        }
                    </div>

                </div>
                
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                            <CurrencyFormat
                                    renderText={(value)=>(
                                        <h3>Order Total: {value}</h3>
                                     )}
                                    decimalScale={2}
                                    
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />
                                <button className="buy_button" disabled={processing||disabled||succeeded}>
                                   <span>{processing?<p>Processing</p>:"Buy Now"}</span> 
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                            {/* && means if error then only show it */}
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Payment;
