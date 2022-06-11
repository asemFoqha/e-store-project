import {UserTypes} from "./models/userTypeModel";
import UserModel from "./models/userModel";
import {addUserCart} from "./carts";

let lastUserId = 2

export let loggedInUser: UserModel | undefined

const users: Array<UserModel> = new Array<UserModel>(
    {
        id: 1,
        imageURL: "https://coffee.alexflipnote.dev/random",
        name: "User A",
        type: UserTypes.SHOPPER,
        email: 'userA@gmail.com',
        password: 'P@ssw0rd'
    },
    {
        id: 2,
        imageURL: "https://coffee.alexflipnote.dev/random",
        name: "Seller A",
        type: UserTypes.SELLER,
        email: 'sellerA@gmail.com',
        password: 'P@ssw0rd'
    }
)

export const getAllUsers = (): Promise<Array<UserModel>> => Promise.resolve(users)

export const addUser = async (user: UserModel): Promise<UserModel> => {
    lastUserId++
    const newUser = {...user, id: lastUserId}

    users.push(newUser)
    await addUserCart(newUser.id)

    return Promise.resolve(newUser)
}

export const login = (email: string, password: string): Promise<UserModel> => {
    const tempUser = users.find(user => user.email === email && user.password === password)
    return new Promise<UserModel>((resolve, reject) => {
        if (tempUser) {
            loggedInUser = tempUser
            resolve(tempUser)
        } else {
            reject('Email or password are invalid')
        }
    })
}

export const isLoggedIn = (): boolean => !!loggedInUser

export const logout = (): void => loggedInUser = undefined
