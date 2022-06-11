import OrderModel from "./models/orderModel";
import CartItemModel from "./models/cartItemModel";

let lastOrderId = 1

const orders: Array<OrderModel> = new Array<OrderModel>({
    id: 1,
    userId: 1,
    date: new Date(),
    cartItems: new Array<CartItemModel>(
        {
            count: 2,
            imageUrl:'https://coffee.alexflipnote.dev/random',
            productId: 1
        },
        {
            count: 1,
            imageUrl:'https://coffee.alexflipnote.dev/random',
            productId: 2
        }
    )
})

export const getUserOrders = (userId: number): Promise<Array<OrderModel>> => {
    const userOrders = orders.filter(order => order.userId === userId)

    return Promise.resolve(userOrders)
}

export const addUserOrder = (userId: number, orderItems: Array<CartItemModel>): Promise<OrderModel> => {
    lastOrderId++
    const newOrder: OrderModel = {cartItems: orderItems, userId, id: lastOrderId, date: new Date()}

    orders.push(newOrder)

    return Promise.resolve(newOrder)
}
