import React from 'react'
import {useStateValue} from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({id,title,price,rating,image}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    };
    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct__image"
                src={image} 
                alt="product image" 
            />    
        <div className="checkoutProduct__info">
            {/*product-info contains title,price,rating inside it*/}
            <p className="checkoutProduct__title">
                {title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map( (_)=><p>⭐</p> )
                }
            </div>
            <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
    )
}
// {id,title,price,rating,image}
export default CheckoutProduct;
