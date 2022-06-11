import React from "react";

import Item from "./Item";
import ProductModel from "../../data/models/productModel";

const ItemsGrid: React.FC<{ items: Array<ProductModel> }> = ({items}) => {
    return (
        <section className="cards">
            {items.map((item: ProductModel) => (
                <Item key={item.id} item={item}/>
            ))}
        </section>
    );
};

export default ItemsGrid;
