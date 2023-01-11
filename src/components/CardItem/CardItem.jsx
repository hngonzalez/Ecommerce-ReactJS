import React from 'react'
import { getProduct } from "../../services/mockService";
import { Link } from 'react-router-dom';
import cardItemStyles from "./carditem.module.css";

function CardItem(
    {id, imgUrl, brand, model, description, category, price, stockVerifier}
) {
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
            <button onClick={() => getProduct(id)}>
              VIEW MORE
            </button>
        </Link>
        <div className="actions">
        <button className={cardItemStyles.btn_buy}>+</button>
        <label>1</label>
        <button className={cardItemStyles.btn_buy}>-</button>
        </div>
    </div>
  )
}

export default CardItem