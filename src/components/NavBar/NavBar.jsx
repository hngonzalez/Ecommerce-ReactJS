import navbarStyles from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import NavItem from "../NavBar/NavItem";
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className={navbarStyles.container}>
            <ul>
                <Link className={navbarStyles.logo} to="/home">
                    <h1>Feel<span>.</span></h1>
                </Link>
                <div className={navbarStyles.nav_tabs_container}>
                    <Link className={navbarStyles.nav_tab} to="/home">Home</Link>
                    <Link className={navbarStyles.nav_tab} to="/category/electrics">Electrics</Link>
                    <Link className={navbarStyles.nav_tab} to="/category/basses">Basses</Link>
                    <Link className={navbarStyles.nav_tab} to="/about">About</Link>
                </div>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar;