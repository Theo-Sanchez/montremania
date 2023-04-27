import { Component, OnInit } from '@angular/core';
import { BasketInterface, ItemInterface } from '../interfaces/item-interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket!: BasketInterface
  constructor() { }

  ngOnInit(): void {
    
  }

}
