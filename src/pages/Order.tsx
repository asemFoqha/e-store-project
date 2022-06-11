import React, {useContext, useEffect, useState} from 'react';
import cartItemsContext from "../context/cartItemsContext";
import OrderModel from "../data/models/orderModel";
import {getUserOrders} from "../data/orders";

const Order: React.FC = () => {
    const {user} = useContext(cartItemsContext)
    const [orders, setOrders] = useState<Array<OrderModel>>();

    const getOrders = async () => {
        if (user) {
            const userOrders = await getUserOrders(user.id)
            setOrders(userOrders)
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div>
            <table>
                {orders?.map(order => <tr>
                    <td>{order.id}</td>
                    <td>{order.userId}</td>
                    <td>{order.date.toDateString()}</td>
                    <td>{order.cartItems.map(cart => cart.count).join(', ')}</td>
                </tr>)}
            </table>
        </div>
    );
};

export default Order;
