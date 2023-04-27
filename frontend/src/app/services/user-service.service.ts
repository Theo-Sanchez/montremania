import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginInterface, UserInterface } from '../interfaces/user-interface';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http:HttpClient) {  } 

	loginUser = (userDetail: LoginInterface): Observable<Object> =>
	{
		return this._http.post('http://localhost:3000/auth/login', userDetail);
	};

  createUser = (userDetail: UserInterface): Observable<Object> => {
    return this._http.post('http://localhost:3000/users', userDetail);
  };  

  getUserId = (): number => {
    // rajouter le localStorage
    return 1;
  }
}
