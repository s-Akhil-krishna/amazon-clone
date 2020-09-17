import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id,title,price,rating,image}) {
    const [{basket},dispatch] = useStateValue();
    const addToBasket = ()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id,title,price,rating,image,
            },
        })
    };

    return (
        /*Product component file to render compoenent with received props*/
        <div className="product">
            {/*3 children : product__info(title,price,rating),img,button */}
            <div className="product__info">
                {/*product-info contains title,price,rating inside it*/}
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map( (_)=><p>⭐</p> )
                    }
                </div>
            </div>
            {/* second child:image  */}
            <img className="product__image"
                src={image} 
                alt="product image" 
            />
            {/*  third child:button */}
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
