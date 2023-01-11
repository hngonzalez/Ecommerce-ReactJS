import React from 'react';
import { Link } from 'react-router-dom';
import navitemStyles from "./navitem.module.css";

export default function NavItem({text, href}) {

    function handleClickItem() {
        
    }

    return (
    <li className={navitemStyles.li} onClick={handleClickItem}>
        <Link to={href}>{text}</Link>
    </li>
    )
}

