import { Injectable } from '@angular/core';
import { WatchInterface } from '../interfaces/watch-interface';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class WatchServiceService {

  constructor(private router: Router) { }

  getWatchList = (): WatchInterface[] => {
    const numberOfWatch = [1,2,3,4]
    return (function() {
      return numberOfWatch.map((number: number) => {
        return ({
          id: parseInt(`${number}`),
          name: `montre${number}`,
          price: `${number*30}€`,
          size: `${Math.floor(Math.random() * number*2)} inches`,
          quantityAvailable: Math.floor(Math.random() * number),
          image: `watch_${number}.jpeg`,
          type: `${number%2 == 0 ? "connected" : "not connected"}`,
        })
      })
    })()
    // const response = watchs()
  }

  

  getWatchDetail = (id: number): WatchInterface | void => {

    let response;
    response = this.getWatchList().filter(
      (watch: WatchInterface) => watch.id == id
    )[0];
    console.log(response, "dans service")
    if (response == undefined) { 
      console.log("This watch does not exists");
      this.router.navigate(['/watch/error']);
    }
    return response
  }

}
