import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchDetailComponent } from './watch-detail/watch-detail.component';
import { WatchResumeComponent } from './watch-resume/watch-resume.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SiteLogoComponent } from './site-logo/site-logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WatchNotFoundComponent } from './watch-not-found/watch-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdNavCustomStyle } from './nav-custom-style/nav-custom-style.component';
import { BasketComponent } from './basket/basket.component';


import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WatchDetailComponent,
    WatchResumeComponent,
    WatchListComponent,
    SubscribeFormComponent,
    SiteLogoComponent,
    NavBarComponent,
    LoginFormComponent,
    WatchNotFoundComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WelcomePageComponent,
    NgbdNavCustomStyle,
    HttpClientModule,
    FormsModule
  ],
  exports: [LoginFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
