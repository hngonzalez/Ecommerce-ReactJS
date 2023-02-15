import React, { useContext, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { cartContext } from '../storage/cartContext';
import { Link } from "react-router-dom";
import checkout from "./checkoutcontainer.module.css";
import { createOrder } from '../../services/firebase';

function InputForm(props) {
    return (
        <div className={checkout.form__group}>
            <label htmlFor="">{props.label}</label>
            <input type="text" 
                value={props.value}
                name={props.name}
                onChange={props.onChange}
            />
        </div>
    )
}

function CheckoutContainer() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        email: ''
    });
    const [confirmOrder, setConfirmOrder] = useState({
        executed: false,
        idOrder: 0
    });

    const [validEmail, setValidEmail] = useState(true);
    let fieldsForm = Object.keys(userData);


    const handlePress = e => {
        if(e.target.value === userData['email']) { 
            setValidEmail(false);
        } else {
            setValidEmail(true);
        }
    }

    const handleCreateOrder = e => {
        const order = {buyer: userData, cart: cart}
        createOrder(order).then(resp => {
            setConfirmOrder({executed: true, idOrder: resp});
            clear();
        })
    }

    function onInputChange(evt) {
        let value = evt.target.value;
        let inputName = evt.target.name;

        let newState = {...userData};

        newState[inputName] = value;
        setUserData(newState);
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
                            <h3>Completar el formulario para finalizar</h3>
                            {
                                fieldsForm.map((field) => (
                                    <InputForm
                                        value={userData[field]}
                                        name={field}
                                        label={field}
                                        onChange={onInputChange}
                                    />
                                ))
                            }
                            <div className={checkout.form__group}>
                                <label htmlFor="">Repetir E-mail</label>
                                <input type="text" onChange={handlePress}/>
                            </div>
                        </div>
                        <div>
                            <div className={checkout.price_container}>
                                Total: ${totalPriceInCart()}
                                <span hidden={!confirmOrder.executed}>Order creada!</span>
                                <span hidden={!confirmOrder.executed}>Número: {confirmOrder.idOrder}</span>
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