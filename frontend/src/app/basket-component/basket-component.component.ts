import { Component, OnInit } from '@angular/core';
import { BasketInterface } from '../interfaces/item-interface';
import { ItemInterface } from '../interfaces/item-interface';
import { BasketServiceService } from '../services/basket-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-basket-component',
  templateUrl: './basket-component.component.html',
  styleUrls: ['./basket-component.component.css']
})
export class BasketComponentComponent implements OnInit {

  userBasket!: BasketInterface
  quantity!: {[itemId: string] : number}
  userId!: number
  itemsStoresSentence!: string

  constructor(
    private basketService: BasketServiceService,
    private userService: UserServiceService
    ) { }

  ngOnInit(): void {
    this.userId = this.userService.getUserId();
    this.userBasket = this.basketService.getUserBasket(this.userId);
    console.log("basket", this.userBasket['items']);
    this.itemsStoresSentence = this.getLength() != 0 ? `You have ${this.getLength()} item(s) type in your basket.` : "Your basket is empty"
  }

  ngOnChanges(): void {
    this.itemsStoresSentence = this.getLength() != 0 ? `You have ${this.getLength()} item(s) type in your basket.` : "Your basket is empty"
  }
  total() {
    return this.userBasket.totalPrice;
  }

  getLength() {
    return this.userBasket.items.length || 0
  }
  
  increaseQuantity(itemId: number) {
    this.quantity[itemId] += 1
  }
  decreaseQuantity(itemId: number) {
    this.quantity[itemId] -= 1;
  }

  resetQuantity(itemId: number) {
    this.quantity[itemId] = 0;
  }

  removeItem(item: ItemInterface) {
    this.userBasket.items = this.userBasket.items.filter((i) => i !== item);
    this.basketService.removeItem(item, this.userId, this.quantity[item.id])
  }
}
