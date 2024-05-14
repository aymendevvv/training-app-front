import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false;

  constructor(private http:HttpClient) { }

  login(username:string  , password:string  ): Observable<any>{
    return this.http.post('http://localhost:8080/login', {username , password}).pipe(
      tap(res =>{
        this.loggedInStatus = true ; 
      })
    );
  }

  public getlogginedInStatus(){
    return this.loggedInStatus;
  }
}
