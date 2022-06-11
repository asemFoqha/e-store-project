import React from "react";
import UserModel from "../data/models/userModel";

export interface ContextObject {
    user: UserModel | undefined
    itemsCount: number
    handelCartIncrease: () => void
    setUser: (user: UserModel | undefined) => void
}

const CartItemsContext = React.createContext<ContextObject>(
    {
        user: undefined,
        itemsCount: 0,
        handelCartIncrease: () => undefined,
        setUser: () => undefined
    }
);
CartItemsContext.displayName = "CartItems";

export default CartItemsContext;
