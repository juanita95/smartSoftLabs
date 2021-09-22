import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiKey = 'AIzaSyDWDgEw7EIvhN4zJfPP7NWyDScogseyYBc';
  token: string;
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.getToken();
  }

  logIn(user: User): Observable<any>{
    const authData = {
      ...user,
      returnSecureToken: true,
    }

    return this.http.post(
      `${environment.loginUserUrl}${this.apiKey}`, authData
      ).pipe(
        map((authData)=>{
          this.saveToken(authData['idToken']);
          return authData;
        })
      );
  }

  logout(): void{
    localStorage.removeItem('token');
  }

  registerUser(user: User): Observable<any>{
    const authData = {
      ...user,
      returnSecureToken: true,
    }

    return this.http.post(
      `${environment.createUserUrl}${this.apiKey}`, authData
      ).pipe(
        map((authData)=>{
          this.saveToken(authData['idToken']);
          return authData;
        })
      );
  }

  getToken(){
    this.token = (localStorage.getItem('token'))
      ? localStorage.getItem('token')
      : '';
  }

  private saveToken(idToken:string){
    this.token = idToken;
    localStorage.setItem('token', idToken);

    let date = new Date();
    date.setSeconds(3600);

    localStorage.setItem('tokenEnds', date.getTime().toString());
  }

  isUserAuthenticated(): boolean{
    if(this.token.length < 2){
      return false;
    }

    const tokenEnds = Number(localStorage.getItem('tokenEnds'));
    const tokenEndDate = new Date();
    tokenEndDate.setTime(tokenEnds);
    const validateUser = tokenEndDate > new Date() ? true: false;
    this.isAuthenticated$.next(validateUser)
    return validateUser;

  }

}
