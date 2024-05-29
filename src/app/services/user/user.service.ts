import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../models/user.model';
import { Observable, map } from 'rxjs';
import { Applicant } from '../../../models/applicant.model';
import { ApplicantRegistration } from '../../interfaces/applicant-registration';
import { CompanyRegistration } from '../../interfaces/company-registration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public save_user(user: User): Observable<number> {
    return this.http.post('http://localhost:8080/users/new', user, { observe: 'response' }).pipe(
      map(res => res.status)
    );}
  public save_applicant(applicant: ApplicantRegistration): Observable<number> {
    return this.http.post('http://localhost:8080/authenticate/register-applicant', applicant, { observe: 'response' }).pipe(
      map(res => res.status)
    );}
  public save_company(company: CompanyRegistration): Observable<number> {
    return this.http.post('http://localhost:8080/authenticate/register-company', company, { observe: 'response' }).pipe(
      map(res => res.status)
    );}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }
}
