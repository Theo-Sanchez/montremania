import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-watch-not-found',
  templateUrl: './watch-not-found.component.html',
  styleUrls: ['./watch-not-found.component.css']
})
export class WatchNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/watch']);
    }, 6000);
  }

}
