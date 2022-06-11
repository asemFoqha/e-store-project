import React, {useEffect, useState} from 'react';
import ProductModel from "../data/models/productModel";
import {getAllProducts} from "../data/products";

const Products: React.FC = () => {
    const [products, setProducts] = useState<Array<ProductModel>>();

    const getProducts = async () => {
        const productList = await getAllProducts()
        setProducts(productList)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>

        </div>
    );
};

export default Products;
