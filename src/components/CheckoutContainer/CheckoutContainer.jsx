import React from 'react'
import NavBar from '../NavBar/NavBar'
import checkout from "./checkoutcontainer.module.css";

function CheckoutContainer() {
  return (
    <>
        <NavBar />
        <div className={checkout.container}>
            <div className={checkout.checkout_container}>
                <div className="checkout_itemlist">
                    asd
                </div>
                <div className="checkout_resume">
                    asd
                </div>
            </div>
        </div>
    </>
  )
}

export default CheckoutContainer