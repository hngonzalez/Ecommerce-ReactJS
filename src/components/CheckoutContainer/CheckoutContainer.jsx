import React, { useContext, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { cartContext } from '../storage/cartContext';
import { Link } from "react-router-dom";
import checkout from "./checkoutcontainer.module.css";
import { createOrder } from '../../services/firebase';

function CheckoutContainer() {
    const { cart, removeItem, totalPriceInCart } = useContext(cartContext);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const handleChange = event => {
        setEmail(event.target.value);
    };

    const handlePress = e => {
        if(e.target.value === email) { 
         setValidEmail(false);
        }
    }

    const handleCreateOrder = e => {
        createOrder(cart).then(resp => {
            console.log(resp);
        })
    }

    return (
        <>
            <NavBar />
            <div className={checkout.container}>
                <div className={checkout.checkout_container}>
                    <div className={checkout.checkout_itemlist}>
                        {cart.map((item) => (
                            <div key="{item}" className={checkout.item_row}>
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
                        <div className={checkout.form__container}>
                            <div className={checkout.form__group}>
                                <label htmlFor="">Nombre</label>
                                <input type="text" onChange={handlePress}/>
                            </div>
                            <div className={checkout.form__group}>
                                <label htmlFor="">Apellido</label>
                                <input type="text" />
                            </div>
                            <div className={checkout.form__group}>
                                <label htmlFor="">Telefono</label>
                                <input type="text" />
                            </div>
                            <div className={checkout.form__group}>
                                <label htmlFor="">E-mail</label>
                                <input type="text"
                                    onChange={handleChange} 
                                    value={email}
                                />
                            </div>
                            <div className={checkout.form__group}>
                                <label htmlFor="">Repetir E-mail</label>
                                <input type="text" onChange={handlePress}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                Total: ${totalPriceInCart()}
                            </div>
                            <button className={checkout.button_create} disabled={validEmail}
                                onClick={handleCreateOrder}
                            >
                                Finalizar Compra
                            </button>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutContainer