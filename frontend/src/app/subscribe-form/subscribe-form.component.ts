import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { UserInterface } from '../interfaces/user-interface';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  formElements!: string[]
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void { 
    this.formElements =  [
    "username",
    "password",
    "firstname",
    "lastname",
    "address"]
  }
  
 
resetForm = (form: NgForm) => {
  form.resetForm()
};

  submit(data: UserInterface, form: NgForm)
    {
      console.log(data)
      this.userService.createUser(data);
      this.resetForm(form);
      // console.log(data);
    }
}