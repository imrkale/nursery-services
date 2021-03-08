import { Card } from '@material-ui/core';
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider.js'


export default function CheckoutProduct({ id,image,title,price,rating,hideButton }) {
const [{},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (

        <Card className="checkoutProduct">

            <img className="checkoutProduct_image" src={image}/>
            
            <div className="checkoutProduct_info">
                <div className="checkoutProduct_title">{title}</div>
                <div className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>

                <div className="checkoutProduct_rating">
                   
                        {Array(rating).fill().map((_,i)=>("⭐"))}
                    
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
                

            </div>
            
        </Card>
    )
}
