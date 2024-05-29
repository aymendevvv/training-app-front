import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { UserService } from '../../services/user/user.service';
import { User } from '../../../models/user.model';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule} from 'primeng/stepper'; 
import { EventEmitter } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ProfileSetupComponent } from '../profile-setup/profile-setup.component';
import { Applicant } from '../../../models/applicant.model';
import { ApplicantRegistration } from '../../interfaces/applicant-registration';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

interface Degree {
  name: string;
  code: string;

}


@Component({
  selector: 'app-applicant-registration',
  standalone: true,
  imports: [ ToastModule ,  ProfileSetupComponent ,  FormsModule ,  CardModule,  StepperModule  ,  ReactiveFormsModule , FloatLabelModule , ButtonModule  ,CommonModule , RouterLink , CalendarModule , InputTextModule],
  providers:[MessageService] , 
  templateUrl: './applicant-registration.component.html',
  styleUrl: './applicant-registration.component.css'
})

export class ApplicantRegistrationComponent implements OnInit , OnDestroy{

  constructor(private fb : FormBuilder , private userService : UserService  , private messageService :MessageService , private router:Router){}

  @Output() role  = new EventEmitter<any>(); 

  currentRole : string = 'APPLICANT' ;

  


  ngOnInit(): void {
    this.role.emit("APPLICANT") ;
  }

  ngOnDestroy(): void {
    this.role.emit(undefined);
  }
  applicantRegisterForm = this.fb.group({

    firstName: [undefined,[Validators.required]],
    lastName:[undefined,[Validators.required]],
    dateOfBirth:[undefined,[Validators.required ] ],
    username:[undefined,[Validators.required]],
    password:[undefined , Validators.required   ] , 
    passwordAgain:[undefined, Validators.required],
    email: [undefined , Validators.email],
    phoneNumber:[undefined], 
    profile: null  ,


  });

  

  get username(){
    return this.applicantRegisterForm.controls['username'];
  }

  get password(){
    return this.applicantRegisterForm.controls['password'];
  }
  get passwordAgain(){  
    return this.applicantRegisterForm.controls['passwordAgain'];
  }
  get phoneNumber(){
    return this.applicantRegisterForm.controls['phoneNumber'];
  } 

  get firstName() {
    return this.applicantRegisterForm.controls['firstName'];
  }
  
  get lastName() {
    return this.applicantRegisterForm.controls['lastName'];
  }
  
  get dateOfBirth() {
    return this.applicantRegisterForm.controls['dateOfBirth'];
  }
  

  
  get email() {
    return this.applicantRegisterForm.controls['email'];
  }
  
  registerApplicant(){
    if(this.applicantRegisterForm.valid){
      const formValue = this.applicantRegisterForm.value;
      
      const applicant:ApplicantRegistration = {
        username: formValue.username ,
        password: formValue.password , 
        email: formValue.email , 
        Applicant_firstname: formValue.firstName , 
        Applicant_lastname: formValue.lastName , 
        user_phone_number: formValue.phoneNumber , 
        user_join_date: new Date().toISOString() , 
        Applicant_birthday: formValue.dateOfBirth , 
        notifications: null , 
        alerts: null , 
        applicantProfile: null , 
      }
      

      this.userService.save_applicant(applicant).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'An unknown error occurred!';
            if (error.error instanceof ErrorEvent) {
              
                errorMessage = `Error: ${error.error.message}`;
            } else {
              
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
