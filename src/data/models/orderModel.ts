import CartItemModel from "./cartItemModel";

export default interface OrderModel {
    id: number
    date: Date
    userId: number
    cartItems: Array<CartItemModel>
}
