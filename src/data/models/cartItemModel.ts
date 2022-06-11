import ProductModel from "./productModel";

export default interface CartItemModel {
    productId: number
    count: number
    imageUrl:string
    product?: ProductModel
}
