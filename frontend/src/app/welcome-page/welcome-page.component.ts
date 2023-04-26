import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
	standalone: true,
	imports: [NgbCarouselModule, NgIf],
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  images!: string[]
  constructor() { }

  ngOnInit(): void {
    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
}
