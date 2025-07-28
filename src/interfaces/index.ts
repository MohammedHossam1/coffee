export interface IProduct {
    id: number;
    images: string[];
    title: string;
    price: number;
    category: string
    desc: string
}
export interface ICategory {
    id: number;
    image: string;
    text: string;
    name: string;
    price: number;
}