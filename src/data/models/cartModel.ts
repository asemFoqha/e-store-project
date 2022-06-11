import CartItemModel from "./cartItemModel";

export default interface CartModel {
    id: number
    items: Array<CartItemModel>
    userId: number
}
