import { Component, OnInit } from '@angular/core';
import { WatchServiceService } from '../services/watch-service.service';
import { WatchInterface } from '../interfaces/watch-interface';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  watchList!: WatchInterface[];
  watchIdList!: number[];
  constructor (
    private watchService: WatchServiceService,
  ) { }

  ngOnInit(): void {
    this.watchList = this.watchService.getWatchList();
    console.log(this.watchList);
    this.watchIdList = this.watchList.map((watch: WatchInterface) => {
      return watch.id
    })
  }

}
