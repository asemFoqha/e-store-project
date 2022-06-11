import React, { useState, useEffect, useContext } from "react";

import CartItemsContext from "../context/cartItemsContext";

import ItemsGrid from "../components/items/ItemsGrid";
import { getAllProducts } from "../data/products";
import ProductModel from "../data/models/productModel";

interface Props {
  onLoaderStart: () => void;
  onLoaderEnd: () => void;
}

const Home: React.FC<Props> = ({ onLoaderStart, onLoaderEnd }) => {
  const [items, setItems] = useState<Array<ProductModel>>([]);
  const { itemsCount } = useContext(CartItemsContext);

  useEffect(() => {
    const fetchItems = async () => {
      onLoaderStart();
      const result = await getAllProducts();
      onLoaderEnd();

      setItems([...result]);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <ItemsGrid items={items} />
    </div>
  );
};

export default Home;
