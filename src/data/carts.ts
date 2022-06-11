import CartModel from "./models/cartModel";
import CartItemModel from "./models/cartItemModel";
import {getAllProducts} from "./products";

let lastCartId = 1

const carts: Array<CartModel> = new Array<CartModel>(
    {
        id: 1,
        items: new Array<CartItemModel>(
            {
                imageUrl:'https://coffee.alexflipnote.dev/random',
                count: 2,
                productId: 1,
                
            },
            {
                imageUrl:'https://coffee.alexflipnote.dev/random',
                count: 3,
                productId: 2,
                
            },
            {
                imageUrl:'https://coffee.alexflipnote.dev/random',
                count: 1,
                productId: 3,
                
            }
        ),
        userId: 1
    }
)

export const getUserCart = async (userId: number): Promise<CartModel> => {
    const userCart = carts.find(cart => cart.userId === userId)

    if (userCart) {
        const products = await getAllProducts()
        userCart.items = userCart.items.map(item => {
            let itemProduct = products.find(product => product.id === item.productId)
            item.product = itemProduct
            return {...item, product: itemProduct}
        })
    }

    return new Promise<CartModel>((resolve, reject) => {
        userCart ? resolve(userCart) : reject()
    })
}

export const addUserCart = (userId: number): Promise<CartModel> => {
    lastCartId++
    const newCart: CartModel = {
        id: lastCartId,
        items: new Array<CartItemModel>(),
        userId: userId
    }

    carts.push(newCart)

    return Promise.resolve(newCart)
}
