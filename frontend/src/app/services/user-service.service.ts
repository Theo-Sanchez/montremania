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

  createUser = (userDetail: UserInterface): Observable<Object> => {
    console.log(userDetail);
    const test = this._http.post('http://localhost:3000/users', userDetail)
    test.subscribe();
    return test;
  };  

  getUserId = (): number => {
    // rajouter le localStorage
    return 1;
  }
}
