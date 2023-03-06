import React from "react";
// import { ShoppingCartContext } from "../context/ShoppingCartContext";
// import Cart from "../context/ShoppingCartContext";

const NavBar = () => {
    // const value = React.useContext(ShoppingCartContext);
    return (
        <nav className="main-nav">
            <ul className="main-nav-list">
                {/* FIXME : PASS VALUE FROM Context Provider */}
                <li className="nav-item"><a href="https://bunnyandbro.cz" className="nav-item-link">Cart</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;