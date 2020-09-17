import React from 'react';
import {useStateValue} from "./StateProvider";
import  "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com//images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="checkout ad"
                />
            
                {basket.length===0 ?(
                        <div>
                            <h2 className="checkout__Empty">Your basket is EMPTY!!! Please add items to checkout</h2>
                        </div>
                    ):(
                        <div>
                            <h2 className="checkout__NotEmpty">Your Shopping Basket</h2>
                            {
                                basket.map((item)=>(
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}
                                    />
                                ))
                            }
                        </div>
                    )
                }
        </div> {/*checkout__left*/}
        {
            basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )
        }

    </div>/*checkout*/


    );
}

export default Checkout;
