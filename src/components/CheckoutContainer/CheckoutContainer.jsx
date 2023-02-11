import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import { cartContext } from '../storage/cartContext';
import checkout from "./checkoutcontainer.module.css";

function CheckoutContainer() {
    const { cart, removeItem, totalPriceInCart } = useContext(cartContext);

    return (
        <>
            <NavBar />
            <div className={checkout.container}>
                <div className={checkout.checkout_container}>
                    <div className={checkout.checkout_itemlist}>
                        {cart.map((item) => (
                            <div className={checkout.item_row}>
                                <img src={item.imgUrl} alt="" />
                                <p>{item.brand} {item.model}</p>
                                <label>${item.price}</label>
                                <div className="actions">
                                    <button onClick={removeItem}>Remover</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={checkout.checkout_resume}>
                        <div>
                        Total: ${totalPriceInCart()}
                        </div>
                       <div>
                       <button>Finalizar Compra</button>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutContainer