import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";

import withLoader from "./hoc/withLoader";
import CartItemsContext from "./context/cartItemsContext";
import "./App.css";

import Navbar from "./components/ui/Navbar";
import Home from "./pages/home";
import Cart from "./pages/cart";
import {loggedInUser} from "./data/users";
import Login from "./pages/login";
import UserModel from "./data/models/userModel";

const App: React.FC = (props: any) => {
    const [cartItems, setCartItems] = useState<number>(0);
    const [user, setUser] = useState<UserModel | undefined>(loggedInUser);

    const handelCartIncrease = () => {
        setCartItems(cartItems + 1);
    };

    const handleSetUser = (user: UserModel | undefined) => {
        setUser(user)
    }

    return (
        <div className="homeContainer">
            <CartItemsContext.Provider
                value={{
                    user,
                    itemsCount: cartItems,
                    handelCartIncrease,
                    setUser: handleSetUser
                }}
            >
                <Navbar/>

                <Routes>
                    {user &&
                        <>
                            <Route path="/cart" element={<Cart {...props} />}/>
                            <Route path="/" element={<Home {...props} />}/>
                        </>
                    }
                    {!user && <Route path='/*' element={<Login/>}/>}
                </Routes>
            </CartItemsContext.Provider>
        </div>
    );
};

// using higher order component to wrap all the pages with loader
export default withLoader(App);
