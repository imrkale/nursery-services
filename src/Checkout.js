import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct.js'
import { useStateValue } from './StateProvider.js'


export default function Checkout() {    
    const [{basket,user}]=useStateValue();

    return (
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_ad" src="https://i.pinimg.com/originals/c3/8d/d2/c38dd23edf6554169bc5f3d867484bf2.jpg" alt="Banner"/>

                <div>
                    <h3>Hello {user?user.email:'Guest'}</h3>
                    <h1 className="checkout_title">Your Green Basket</h1>
                   
                    {
                        basket.map(item=>(
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

            <div className="checkout_right">
                <Subtotal/>

            </div>
            
        </div>
    )
}
