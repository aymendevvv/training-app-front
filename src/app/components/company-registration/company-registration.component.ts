import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/authentication/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import { ProfileSetupComponent } from '../profile-setup/profile-setup.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CompanyRegistration } from '../../interfaces/company-registration';
import { UserService } from '../../services/user/user.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports : [ToastModule ,  ProfileSetupComponent ,  StepperModule , CardModule , ReactiveFormsModule , FloatLabelModule , ButtonModule  ,CommonModule , RouterLink , CalendarModule , InputTextModule],
  providers : [MessageService] , 
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.css'
})
export class CompanyRegistrationComponent {


  constructor(private fb : FormBuilder , private userService : UserService , private messageService: MessageService , private router:Router){

  }

  currentRole : string = 'COMPANY' ;

  companyRegisterForm = this.fb.group({ 
    
    username : [undefined  , Validators.required] , 
    password:[undefined , Validators.required   ] , 
    passwordAgain:[undefined, Validators.required],
    compLabel : [undefined , [Validators.required]],
    compCreationDate : [undefined , [Validators.required]] , 
    email: [undefined , Validators.email],
    phoneNumber:[undefined ] , 
    profile: null 
  });
  
  
  get compLabel(){
    return this.companyRegisterForm.controls['compLabel'];
  }

  get compCreationDate(){
    return this.companyRegisterForm.controls['compCreationDate'];
  }
  get username(){
    return this.companyRegisterForm.controls['username'];
  }

  get password(){
    return this.companyRegisterForm.controls['password'];
  }
  get passwordAgain(){
    return this.companyRegisterForm.controls['passwordAgain'];
  }
  

  get email(){
    return this.companyRegisterForm.controls['email'];
  }
  get phoneNumber(){
    return this.companyRegisterForm.controls['phoneNumber'] ; 
  }

  registerCompany(){
    if(this.companyRegisterForm.valid){
      const formValue = this.companyRegisterForm.value;
      
      const company: CompanyRegistration = {
        username: formValue.username ,
        password: formValue.password , 
        email: formValue.email , 
        company_label: formValue.compLabel , 
        user_phone_number: formValue.phoneNumber , 
        user_join_date: new Date().toISOString() , 
        creation_date: formValue.compCreationDate , 
        notifications: null , 
        alerts: null , 
        companyProfile: null , 
      }
      

      this.userService.save_company(company).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'An unknown error occurred!';
            if (error.error instanceof ErrorEvent) {
                // Client-side errors
                errorMessage = `Error: ${error.error.message}`;
            } else {
                // Server-side errors
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            this.messageService.add({severity: 'error', summary: 'Server side error', detail: ' something went wrong '});
            return throwError(()=>error);
        })
    ).subscribe((status: number) => {
          
        console.log(status);
        if(status == 200){
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'new user registered successfully'})
          setTimeout(() => {
            this.router.navigate(["/login"]);
          }, 3000);
        }else{
          
          this.messageService.add({severity: 'error', summary: 'Fail', detail: ' user registeration failed'})
        }
      });
    }
  }
  

}
