import { Card } from '@material-ui/core';
import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider.js';

function Product({ id,title,image,price,rating }) {

    const [{ basket },dispatch]=useStateValue();

    console.log("Hello 💛💛", basket)

const addtoBasket = () => {
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
    });
};

    return (
        <Card className="product">

            <div className="product_info">
                {title}
                <div className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i)=>("⭐"))}
                </div>
            </div>
            
            <img alt="Plant"  src={image}/>
            

            <button onClick={addtoBasket}>Add to basket</button>
        </Card>
    )
}

export default Product;
