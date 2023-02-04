import React, { useContext } from 'react'
import { getProduct } from "../../services/mockService";
import { getProductById } from "../../services/firebase";
import { Link } from 'react-router-dom';
import cardItemStyles from "./carditem.module.css";
import { useState } from 'react';
import { cartContext } from '../storage/cartContext';

function CardItem(
    {id, imgUrl, brand, model, description, category, price, stockInitial}
) {
    const [items, setItems] = useState(0);
    const { addToCart, removeItem } = useContext(cartContext);

    function handleAddItems() {
        /* console.log(stockInitial); */
        if (stockInitial >= 1 && items < stockInitial) {
            setItems(items + 1);    
            addToCart({id, imgUrl, brand, model, description, category, price}, 1);
        }   
    }

    function handleSubstracItems() {
        if (items > 0) {
            setItems(items - 1);    
            removeItem({id, imgUrl, brand, model, description, category, price}, 1);
        }
    }

  return (
    <div className={cardItemStyles.card}>
        <img src={imgUrl}alt="" />
        <div className={cardItemStyles.model_price}>
            <h3>{model}</h3>
            <h4>${price}</h4>
        </div>
        <h5 className={cardItemStyles.brand}>
            {brand} 
        </h5>
        <div className={cardItemStyles.container_available_colors}>
            <div>
                sada
            </div>
        </div>
        <Link to={`/details/${id}`}>
            <button onClick={() => getProductById(id)}>
              VIEW MORE
            </button>
        </Link>
        <div className={cardItemStyles.actions}>
            <button className={cardItemStyles.btn_buy} onClick={handleAddItems}>+</button>
            <label> {items} </label>
            <button className={cardItemStyles.btn_buy} onClick={handleSubstracItems}>-</button>
        </div>
    </div>
  )
}

export default CardItem