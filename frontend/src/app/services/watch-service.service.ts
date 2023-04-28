import { Injectable } from '@angular/core';
import { WatchInterface } from '../interfaces/watch-interface';
import {Router} from "@angular/router";
import sampleJson from "../../assets/bottleneck/watches.json";

@Injectable({
  providedIn: 'root'
})
export class WatchServiceService {

  constructor(private router: Router) { }

  getWatchList = (): WatchInterface[] => {
    return sampleJson;
  };
  
  getWatchDetail = (watchId: number): WatchInterface => {

    let response;
    response = this.getWatchList().filter(
      (watch: WatchInterface) => watch.id == watchId
    )[0];
    console.log(response, "dans service")
    if (response == undefined) { 
      console.log("This watch does not exists");
      this.router.navigate(['/watch/error']);
    }
    return response
  }

}
