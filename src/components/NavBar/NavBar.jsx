import navbarStyles from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import NavItem from "../NavBar/NavItem"

function NavBar() {

    return (
        <div className={navbarStyles.container}>
            A Mangiare la Pizza Logo
            <NavItem text="Inicio"/>
            <NavItem text="Productos"/>
            <NavItem text="Sobre Nosotros"/>
            <CartWidget />
        </div>
    )
}

export default NavBar;