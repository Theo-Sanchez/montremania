import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketServiceService } from '../services/basket-service.service';
import { ItemInterface } from '../interfaces/item-interface';

@Component({
  selector: 'app-shopping-item-component',
  templateUrl: './shopping-item-component.component.html',
  styleUrls: ['./shopping-item-component.component.css']
})
export class ShoppingItemComponentComponent implements OnInit {
  @Input() item!: ItemInterface;
  @Input() quantity!: number;
  @Output() onRemove = new EventEmitter<never>();
  @Output() onIncrease = new EventEmitter<never>();
  @Output() onDecrease = new EventEmitter<never>();
  @Output() onResetQuantity = new EventEmitter<never>();
  userId!: number

  remove() {
    this.onRemove.emit();
  }

  increase() {
    for (let i = 0; i< this.quantity; i++) {
      this.onIncrease.emit();
    }
    this.onResetQuantity.emit();
  }
  decrease() {
    for (let i = 0; i< this.quantity; i++) {
      this.onDecrease.emit();
    }
    this.onResetQuantity.emit();
  }

  constructor(
    public basketService: BasketServiceService,

  ) { }

  ngOnInit(): void {
    this.userId = 1;
  }

}
