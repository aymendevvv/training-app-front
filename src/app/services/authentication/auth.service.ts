import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable , tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false;

  constructor(private http:HttpClient) { }

  private baseUrl:string = "http://localhost:8080/authenticate"; 

  login(username:string  , password:string  ): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`, {username , password}).pipe(
      tap(res =>{
        this.loggedInStatus = true ; 
        localStorage.setItem('jwtToken' , res.token)
        console.log(`your token is ${res.token}`)
      })
    );
  }

  logout():void{
    localStorage.removeItem("jwtToken");
  }

  getToken():string | null {
    return localStorage.getItem('jwtToken') ;
  }

  

  public getlogginedInStatus(){
    return this.loggedInStatus;
  }
}
