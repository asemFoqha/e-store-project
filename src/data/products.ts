import ProductModel from "./models/productModel";

let lastProductId = 3;

const products: Array<ProductModel> = new Array<ProductModel>(
    {
        id: 1,
        description:
            "Lorem ipsum, dolor sit amet consectetur voluptatibus a reprehenderit placeat ",
        imageURL: "https://coffee.alexflipnote.dev/random",
        name: "DAI",
        price: "1.6",
    },
    {
        id: 2,
        description: "adipisicing elit. Officiis voluptate, deleniti non nemo ",
        imageURL: "https://coffee.alexflipnote.dev/random",
        name: "BAI",
        price: "13",
    },
    {
        id: 3,
        description: "enim optio quia natus vitae explicabo est maxime blanditiis ",
        imageURL: "https://coffee.alexflipnote.dev/random",
        name: "Coffee",
        price: "2",
    },
    {
        id: 4,
        description: "atque? Sequi, porro ab!",
        imageURL: "https://coffee.alexflipnote.dev/random",
        name: "Tea",
        price: "1",
    },
    {
        id: 5,
        description: "enim optio quia natus vitae explicabo est maxime blanditiis enim optio quia natus vitae explicabo est maxime blanditiis ",
        imageURL: "https://coffee.alexflipnote.dev/random",
        name: "juice",
        price: "0.5",
    }
);

export const getAllProducts = (): Promise<Array<ProductModel>> =>
    Promise.resolve(products);

export const addProduct = (product: ProductModel): Promise<ProductModel> => {
    lastProductId++;
    const newProduct = { ...product, id: lastProductId };

    products.push(newProduct);

    return Promise.resolve(newProduct);
};
