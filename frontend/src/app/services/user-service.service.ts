import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LoginInterface, UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http: HttpClient) {  } 

	loginUser = (userDetail: LoginInterface): Observable<Object> =>
	{
		const user = this._http.post('http://localhost:3000/auth/login', userDetail);
    user.subscribe();
    return user
	};

  recordUserInStore = (userId: number) => {
    localStorage.setItem('userId', userId.toString());
  }
  removeUserFromStore = () => {
    localStorage.setItem('userId', "");
  }

  getUserId = (): number => {
    const userId = JSON.parse(localStorage.getItem('userId') as any);
    return userId || 1;
  }

  createUser = (userDetail: UserInterface): Observable<Object> => {
    console.log(userDetail);
    const test = this._http.post('http://localhost:3000/users', userDetail)
    test.subscribe();
    return test;
  };  
}
