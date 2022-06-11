import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";

import CartItemsContext from "../../context/cartItemsContext";

import {NavbarStyled} from "../styled/Navbar.styled";

export default function Navbar() {
    const {user, setUser, itemsCount} = useContext(CartItemsContext);
    return (
        <NavbarStyled>
            <div>BestSeller</div>
            <div>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    {user && <>
                        <NavLink className="cart" to="/cart">
                            Cart
                            <div>
                                <AiOutlineShoppingCart/>
                                {itemsCount}
                            </div>
                        </NavLink>
                        <NavLink to={'/profile'}>{user.name}</NavLink>
                        <NavLink to={'/login'} onClick={() => setUser(undefined)}>
                            Logout
                        </NavLink>
                    </>}
                </ul>
            </div>
        </NavbarStyled>
    );
}
