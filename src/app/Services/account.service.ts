import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AccountService {
apiurl ='https://localhost:7275/api/Authenticate/login'
  constructor(private http:HttpClient) { }

  proceedLogin(usercred:any){
    return this.http.post(this.apiurl,usercred)
    
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }


}
