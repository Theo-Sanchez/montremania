import { Injectable } from '@angular/core';
import { BasketInterface, BasketsInStore, ItemInterface } from '../interfaces/item-interface';


@Injectable({
  providedIn: 'root'
})
export class BasketServiceService {
  userId!: number;

  constructor() { }

  getBaskets = () => {
    const basketsStored = localStorage.getItem('userBasket');
    if (basketsStored) {
      const basketsObject: BasketsInStore = JSON.parse(basketsStored)
      return basketsObject
    }
    return null
  }

  // need to be call on user subscription
  initUserBasket = (userId: number) => {
    const baskets = this.getBaskets();
    const initialBasket = {
        items : [],
        totalPrice: 0,
        lastModified: Date.now().toString()
    }
    if (baskets) {
      localStorage.setItem('userBasket', JSON.stringify({
        ...baskets,
        [userId]: initialBasket
      }))
    }
  }


  // need to be call on user connexion
  getUserBasket = (userId: number): BasketInterface => {
    const baskets = this.getBaskets();
    if (baskets) {
      return baskets[userId];
    }
    return {
      items : [],
      totalPrice: 0,
      lastModified: Date.now().toString()
    }
  }

  addItem = (item: ItemInterface, userId: number): void => {
    const baskets = this.getBaskets();
    if (baskets) {
      if (baskets[userId]) {
      const userBasket: BasketInterface = baskets[userId];
      const newBasket: BasketInterface = {
        items: [
          ...userBasket["items"],
          item
        ],
        totalPrice: userBasket["totalPrice"] + item["price"]*item['quantity'],
        lastModified: Date.now().toString(),
      }
      localStorage.setItem("userBasket", JSON.stringify({
        ...baskets,
        [userId]: newBasket
      }))
    }
    const newBasket: BasketInterface = {
      items: [item],
      totalPrice: item["price"]*item['quantity'],
      lastModified: Date.now().toString(),
    }
    localStorage.setItem("userBasket", JSON.stringify({
      ...baskets,
      [userId]: newBasket
    }))
  }
}
}
