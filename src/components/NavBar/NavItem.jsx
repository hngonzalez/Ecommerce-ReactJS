import React from 'react';
import navitemStyles from "./navitem.module.css";

export default function NavItem(props) {

    function handleClickItem() {
        
    }

    return (
    <li className={navitemStyles.li} onClick={handleClickItem}>
        {props.text}
    </li>
    )
}

