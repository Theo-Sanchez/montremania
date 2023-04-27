import { WatchInterface } from "./watch-interface";

export interface ItemInterface extends WatchInterface{
    quantity: number;
}

export interface BasketInterface {
    items: ItemInterface[] | [];
    totalPrice: number;
    lastModified: string;
}

export interface BasketsInStore {
    [userId: number]: BasketInterface
}