import {UserTypes} from "./userTypeModel";

export default interface UserModel {
    id: number
    name: string
    email: string
    password: string
    imageURL: string
    type: UserTypes
}
