import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { WatchDetailComponent } from './watch-detail/watch-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { WatchNotFoundComponent } from './watch-not-found/watch-not-found.component';
import { BasketComponentComponent } from './basket-component/basket-component.component';

const routes: Routes = [
  {path: "",
   redirectTo: "home",
   pathMatch: "full"
  },
  { title: "Home", 
    path: "",
    component: WelcomePageComponent
  },
  { title: "List", 
    path: "watch",
    component: WatchListComponent
  },
  {title: "Watch not found", 
  path: "watch/error",
  // component: LoginFormPage
  component: WatchNotFoundComponent
  },
  {title: "Detail", 
  path: "watch/:id",
  component: WatchDetailComponent
  }, 
  {title: "Subscribe", 
  path: "subscribe",
  // component: SubscribeFormPage
  component: SubscribeFormComponent
  }, 
  {title: "Login", 
  path: "login",
  // component: LoginFormPage
  component: LoginFormComponent
  },
  { title: "Basket", 
    path: "user/basket",
    component: BasketComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
