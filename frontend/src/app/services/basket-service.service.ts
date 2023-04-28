import { Injectable } from '@angular/core';
import { BasketInterface, BasketsInStore, ItemInterface, ItemInterfaceKey } from '../interfaces/item-interface';
import { WatchInterface } from '../interfaces/watch-interface';
import { UserServiceService } from './user-service.service';


@Injectable({
  providedIn: 'root'
})
export class BasketServiceService {
  userId: number; // to review

  constructor(public userService: UserServiceService) { 
    this.userId = this.userService.getUserId();
  }

  
  getBaskets = () => {
    const basketsStored = localStorage.getItem('userBasket');
    if (basketsStored) {
      const basketsObject: BasketsInStore = JSON.parse(basketsStored)
      return basketsObject;
    }
    return null
  }

  getItemFromBasket = (itemId: number, userId: number) => {
    const basket = this.getBaskets();
    
    if (basket){
      const itemToReturn = basket[userId].items.filter((item) => item.id == itemId);
      if (itemToReturn[0]) {
        return itemToReturn[0]
      } return
    }
    return
  }

  changeItem = (itemId: number, userId: number, newItemProperties: Partial<ItemInterface>) => 
  {
    const baskets = this.getBaskets();
    const itemToChange = this.getItemFromBasket(itemId, userId);
    if (!baskets || !itemToChange) return;
    const indexOfItem = baskets[userId].items.findIndex((item) => JSON.stringify(item) == JSON.stringify(itemToChange));
    let newItem = itemToChange;
    for (const [key, value] of Object.entries(newItemProperties)) {
      console.log(key, value)
      newItem[key] = value;/* tslint:disable */
    }
    const itemToReturn: BasketsInStore = {
      ...baskets,
      [userId] : 
        {
          ...baskets[userId],
        items : [
          ...baskets[userId].items.filter((a, key)=> key != indexOfItem),
          newItem
        ]
      }
    }
    localStorage.setItem("userBasket", 
    JSON.stringify(itemToReturn))
  }
  
  getItemQuantity = (itemId: number, userId: number): number => {
    const baskets = this.getBaskets();
    if (!baskets) return 0
    else {
      const userBasket = baskets[userId]
      const response = userBasket.items.filter((item) => {
        (itemId == item.id)
      })
      return response[0]? response[0].quantity : 0
    }
  }

  changeItemQuantity = (itemId: number, userId:number, quantity: number) => {
    const baskets = this.getBaskets();
    if (!baskets || !quantity) {console.log("oups"); return}
    console.log(baskets[userId].items.filter((itemInStore) => itemInStore.id == itemId)[0], "test")
    const itemQuantity: any = baskets[userId].items.filter((itemInStore) => itemInStore.id == itemId)[0]?.quantity || 0
    console.log("itemQuantity", itemQuantity, "quantity", quantity)
    this.changeItem(itemId, userId, {
      quantity: itemQuantity + quantity}
    )
  }

  // addItemQuantity = (itemId: number, userId: number) => {
  //   this.changeItemQuantity(itemId, userId, true)
  // }

  // removeItemQuantity = (itemId: number, userId: number) => {
  //   this.changeItemQuantity(itemId, userId, false)
  // }


  // need to be call on user subscription
  initUserBasket = (userId: number) => {
    const baskets = this.getBaskets();
    console.log(baskets)
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
      console.log(baskets[userId], "basket dans getUserBasket")
      return baskets[userId];
    }
    return {
      items : [],
      totalPrice: 0,
      lastModified: Date.now().toString()
    }
  }

  addItem = (item: WatchInterface, userId: number, quantity: number): void => {
    const baskets = this.getBaskets();
    const itemWithQuantity = {
      ...item,
      quantity: quantity
    }
    if (baskets) {
      if (baskets[userId]) {
        if (baskets[userId].items.some((itemInStore:ItemInterface) => itemInStore.id ===item.id)){
          this.changeItemQuantity(item.id, userId, quantity)
        }
      else{
      const userBasket: BasketInterface = baskets[userId];
      const newBasket: BasketInterface = {
        items: [
          ...userBasket["items"],
          itemWithQuantity
        ],
        totalPrice: userBasket["totalPrice"] + itemWithQuantity.price*itemWithQuantity.quantity,
        lastModified: Date.now().toString(),
      }
      localStorage.setItem("userBasket", JSON.stringify({
        ...baskets,
        [userId]: newBasket
      }))
    }
    const newBasket: BasketInterface = {
      items: [itemWithQuantity],
      totalPrice: itemWithQuantity.price*itemWithQuantity.quantity,
      lastModified: Date.now().toString(),
    }
    localStorage.setItem("userBasket", JSON.stringify({
      ...baskets,
      [userId]: newBasket
    }))
  }
  }
}
  removeItem = (item: ItemInterface, userId: number, quantity:number = 1): void => {

    const baskets = this.getBaskets();
    let newBasket: BasketInterface;
      if (baskets && baskets[userId]) {
        const userBasket: BasketInterface = baskets[userId];
        const itemInBasket: any = userBasket.items
          .filter((filteredItem: ItemInterface) => 
            filteredItem.id == item.id
          );
        if (itemInBasket.length != 1) { console.log("error")}
        const newQuantity: number = itemInBasket[0].quantity - quantity;
        if (newQuantity == 0) {
          newBasket = {
            ...userBasket,
            items: userBasket['items']
              .filter((filteredItem: ItemInterface) => 
                filteredItem.id == item.id
              )
          };
        }
        else {
          const newItem = {
            ...itemInBasket,
            "quantity" : newQuantity
          };
          newBasket = {
            ...userBasket,
            items: [
              userBasket['items']
              .filter((filteredItem: ItemInterface) => 
                filteredItem.id == item.id
              ),
              newItem
            ]
          };
        }
        localStorage.setItem("userBasket", JSON.stringify({
          ...baskets,
          [userId]: newBasket
        }));
      }
    else {
      newBasket = {
        items: [item],
        totalPrice: item["price"]*item['quantity'],
        lastModified: Date.now().toString(),
      }
    }

    localStorage.setItem("userBasket", JSON.stringify({
      ...baskets,
      [userId]: newBasket
    }))
  }
}
