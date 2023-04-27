import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { UserInterface } from '../interfaces/user-interface';

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
  
  submit(data: UserInterface)
    {
      console.log(data)
      this.userService.createUser(data);
      // console.log(data);
    }
}