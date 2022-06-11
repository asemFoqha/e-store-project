import React, { useContext, useEffect, useState } from "react";

import CartItemModel from "../data/models/cartItemModel";
import { getUserCart } from "../data/carts";
import cartItemsContext from "../context/cartItemsContext";
import CartItems from "../components/ui/CartItems";

const Cart: React.FC = () => {
  const { user } = useContext(cartItemsContext);
  const [items, setItems] = useState<Array<CartItemModel>>();

  useEffect(() => {
    if (user) {
      getUserCart(user.id).then((cart) => {
        setItems(cart.items);
      });
    }
  }, []);
  return (
    <div className="cart-container">
      {items?.map((item) => (
        <CartItems key={item.productId} item={item} />
      ))}
    </div>
  );
};

export default Cart;
