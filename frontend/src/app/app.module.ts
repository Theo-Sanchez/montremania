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
    WatchNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WelcomePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
