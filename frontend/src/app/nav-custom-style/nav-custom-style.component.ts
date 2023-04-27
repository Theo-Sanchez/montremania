import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';

@Component({
	selector: 'ngbd-nav-custom-style',
	standalone: true,
	imports: [NgbNavModule, NgbDropdownModule, AppRoutingModule],
	templateUrl: './nav-custom-style.component.html',
})
export class NgbdNavCustomStyle {}