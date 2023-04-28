import { Component, OnInit } from '@angular/core';
import { BasketInterface } from '../interfaces/item-interface';
import { ItemInterface } from '../interfaces/item-interface';
import { BasketServiceService } from '../services/basket-service.service';

@Component({
  selector: 'app-basket-component',
  templateUrl: './basket-component.component.html',
  styleUrls: ['./basket-component.component.css']
})
export class BasketComponentComponent implements OnInit {

  userBasket!: BasketInterface
  quantity!: {[itemId: string] : number}
  userId!: number


  constructor(private basketService: BasketServiceService) { }

  ngOnInit(): void {
    this.userId = 1;
    this.userBasket = this.basketService.getUserBasket(this.userId);
    console.log(this.userBasket);
  }

  total() {
    return this.userBasket.totalPrice;
  }

  getLength() {
    return this.userBasket.items.length
  }
  
  increaseQuantity(itemId: number) {
    this.quantity[itemId] += 1
  }
  decreaseQuantity(itemId: number) {
    this.quantity[itemId] -= 1;
  }

  removeItem(item: ItemInterface) {
    this.userBasket.items = this.userBasket.items.filter((i) => i !== item);
    this.basketService.removeItem(item, this.userId, this.quantity[item.id])
  }
}
