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


import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BasketComponentComponent } from './basket-component/basket-component.component';
import { ShoppingItemComponentComponent } from './shopping-item-component/shopping-item-component.component';

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
    BasketComponentComponent,
    ShoppingItemComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    WelcomePageComponent,
    NgbdNavCustomStyle,
    FormsModule
  ],
  exports: [LoginFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
