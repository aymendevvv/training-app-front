import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable , tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //add token refresher later
  private loggedInStatus = false;

  constructor(
    private http:HttpClient,
    private router:Router,
    private cookieService:CookieService
  ) { }

  private baseUrl:string = "http://localhost:8080/authenticate"; 

  login(username:string  , password:string  ): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`, {username , password}).pipe(
      tap(res =>{
        this.loggedInStatus = true ; 
        this.cookieService.set('jwt_token', res.token);
        console.log(`your token is ${res.token}`)
      })
    );
  }

  logout():void{
    this.cookieService.delete('jwt_token');
    this.router.navigate(['/login']);
  }

  getToken():string | null {
    return localStorage.getItem('jwtToken') ;
  }

  isTokenExpired(token:string):boolean{
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp === undefined) return false;
    const expirationDate = decodedToken.exp * 1000;
    if(Date.now() >= expirationDate){
      console.log("token expired");
      return true;
    }else{
      console.log("not expired");
      return false ; 
    }

  }

  

  public getlogginedInStatus(){
    return this.loggedInStatus;
  }
}
