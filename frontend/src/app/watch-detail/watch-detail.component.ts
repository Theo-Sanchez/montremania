import { Component, OnInit } from '@angular/core';
import { WatchServiceService } from '../services/watch-service.service';
import { WatchInterface } from '../interfaces/watch-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-detail',
  templateUrl: './watch-detail.component.html',
  styleUrls: ['./watch-detail.component.css']
})
export class WatchDetailComponent implements OnInit {
  
  watchDetail!: WatchInterface | void;
  watchId!: number
  constructor (
    private watchService: WatchServiceService,
    private activeRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params, 'cool');
      this.watchId = params['id'];
    })
    this.watchDetail = this.watchService.getWatchDetail(this.watchId);
    console.log(this.watchDetail);
  }
}
