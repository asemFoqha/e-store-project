import React, {useContext, useState} from "react";

import CartItemsContext from "../../context/cartItemsContext";

const Item: React.FC<{ item: any }> = ({item}) => {
    const {handelCartIncrease} = useContext(CartItemsContext);
    const [isAdded, setIsAdded] = useState(false);

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.imageURL} alt=""/>
                </div>
                <div className="card-back">
                    <h1>{item.name ? item.name : "Name"}</h1>
                    <ul>
                        <li>
                            <strong>Price: </strong> {item.price} JOD
                        </li>
                        <li>
                            <strong>description: </strong> {item.description}
                        </li>
                    </ul>
                    {!isAdded && (
                        <button
                            onClick={() => {
                                handelCartIncrease();
                                setIsAdded(true);
                            }}
                        >
                            Add to cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Item;
