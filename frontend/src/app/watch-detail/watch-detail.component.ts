import { Component, OnInit } from '@angular/core';
import { WatchServiceService } from '../services/watch-service.service';
import { WatchInterface } from '../interfaces/watch-interface';
import { ActivatedRoute } from '@angular/router';
import { BasketServiceService } from '../services/basket-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-watch-detail',
  templateUrl: './watch-detail.component.html',
  styleUrls: ['./watch-detail.component.css']
})
export class WatchDetailComponent implements OnInit {
  
  watchDetail!: WatchInterface;
  watchId!: number
  quantity!: number
  getQuantity!: () => void;
  userId!: number;
  increaseQuantity!: () => void;
  decreaseQuantity!: () => void;
  addItem!: () => void;
  resetQuantity!: () => void;

  constructor (
    private watchService: WatchServiceService,
    private activeRoute: ActivatedRoute,
    public basketService: BasketServiceService,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.userId = this.userService.getUserId(); // à modif

    this.activeRoute.params.subscribe(params => {
      console.log(params, 'cool');
      this.watchId = params['id'];
    })
    this.quantity = this.basketService.getItemQuantity(this.watchId, this.userId)
    console.log(this.quantity)
    
    this.addItem = () => {
      this.basketService.addItem(this.watchDetail, this.userId, this.quantity)
    }
    this.increaseQuantity = () => {
      this.quantity += 1;
      // this.basketService.changeItemQuantity(this.watchId, this.userId, true);
      console.log(this.basketService.getItemQuantity(this.watchId, this.userId));
      console.log(this.quantity);
    }

    this.resetQuantity = () => { this.quantity = 0 }

    this.decreaseQuantity = () => {
      this.quantity -= 1;
      // this.basketService.changeItemQuantity(this.watchId, this.userId, false);
      console.log(this.basketService.getItemQuantity(this.watchId, this.userId));
      console.log(this.quantity);

    }


    this.watchDetail = this.watchService.getWatchDetail(this.watchId);
    console.log(this.watchDetail);
    // this.getQuantity = (increase: boolean): number => {

    // }
  }
}
