import { Component, OnInit } from '@angular/core';
import { WatchServiceService } from '../services/watch-service.service';
import { WatchInterface } from '../interfaces/watch-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-resume',
  templateUrl: './watch-resume.component.html',
  styleUrls: ['./watch-resume.component.css']
})
export class WatchResumeComponent implements OnInit {

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
