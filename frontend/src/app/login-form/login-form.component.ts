import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface } from '../interfaces/user-interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { BasketServiceService } from '../services/basket-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  errorLogin!: boolean;
  constructor(
    private router: Router,
    private _http: HttpClient,
    private basketService: BasketServiceService
  ) { }

  redirectHome = () => {
    this.router.navigate(['/']);
  }
  resetForm = (form: NgForm) => {
    form.resetForm()
  };
  recordUserInLocalHost = () => {
    return
  }
  // enregister l'utilisateur dans le store
  
  ngOnInit(): void {
    this.errorLogin = false;
  }
  
  login = (loginDetail: LoginInterface, loginForm: NgForm) => {
    this.loginStep(loginDetail, loginForm)
      .subscribe()
  }
  
  loginStep = (loginDetail: LoginInterface, loginForm: NgForm) => {
    console.log("oups")
    return this._http.post("http://localhost:3000/auth/login", loginDetail)
    .pipe(
      tap(
      {
        next: (data) => {
          console.log(data)
          this.recordUserInLocalHost();
          this.basketService.initUserBasket(1)
          this.redirectHome();
          this.errorLogin = false;
        },
        error: (error) => {
          console.log(loginDetail, error)
          this.resetForm(loginForm)
          this.errorLogin = true;
        }
      }
      )
    );
  }
}
