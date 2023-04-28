import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-watch-not-found',
  templateUrl: './watch-not-found.component.html',
  styleUrls: ['./watch-not-found.component.css']
})
export class WatchNotFoundComponent implements OnInit {
  timeout: any
  constructor(private router: Router) { }

  ngOnInit() {
    this.timeout = setTimeout(() => {
      this.router.navigate(['/watch']);
    }, 6000);
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

}
