import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { UserInterface } from '../interfaces/user-interface';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  formElements!: string[]
  successSubscribe!: boolean
  timeout: any;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private _http: HttpClient
    ) { }

  redirectHome = () => {
    this.timeout = setTimeout(() => {
      this.router.navigate(['/login']);
    }, 5000)
  }
  ngOnInit(): void { 
    this.formElements =  [
    "username",
    "password",
    "firstname",
    "lastname",
    "address"]
    this.successSubscribe = false
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
  
  recordUserInLocalHost = () => {
    return
  }
  // enregister l'utilisateur dans le store
resetForm = (form: NgForm) => {
  form.resetForm();
};


subscribeStep = (data: UserInterface, subscribeForm: NgForm) => {
  return this._http.post('http://localhost:3000/users', data)
  .pipe(
    tap(
    {
      next: (data) => {
        console.log(data)
        this.recordUserInLocalHost();
        this.successSubscribe = true;
        this.redirectHome();
      },
      error: (error) => {
        console.log(data, error)
        this.resetForm(subscribeForm)
      }
    }
    )
  );
}
  submit(data: UserInterface, form: NgForm)
    {
      console.log(data)
      this.subscribeStep(data, form)
        .subscribe();
      // this.userService.createUser(data);
      this.resetForm(form);
      // console.log(data);
    }
}