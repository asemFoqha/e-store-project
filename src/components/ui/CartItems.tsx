import React from "react";

import ProductModel from "../../data/models/productModel";

const CartItems: React.FC<any> = ({ item }) => {
  return (
    <div className="cart-items">
      <div className="image-container">
        <img src={item.imageUrl} />
        <span>item name</span>
      </div>
      <div className="cart-items__count-container">
        <button>+</button>
        <div>{item.count}</div>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartItems;
