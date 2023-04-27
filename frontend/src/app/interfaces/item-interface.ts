import { WatchInterface } from "./watch-interface";

export interface ItemInterface extends WatchInterface{
    quantity: number;
    [key: string]: any
}



export type ItemInterfaceKey = keyof ItemInterface

export interface BasketInterface {
    items: ItemInterface[] | [];
    totalPrice: number;
    lastModified: string;
}

export interface BasketsInStore {
    [userId: number]: BasketInterface
}

// type ItemProperties = keyof ItemInterface

// interface NewItemProperties {
//     [K in keyof ItemProperties]: 
// }