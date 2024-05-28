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

interface Degree {
  name: string;
  code: string;

}


@Component({
  selector: 'app-applicant-registration',
  standalone: true,
  imports: [ ProfileSetupComponent ,  FormsModule ,  CardModule,  StepperModule  ,  ReactiveFormsModule , FloatLabelModule , ButtonModule  ,CommonModule , RouterLink , CalendarModule , InputTextModule],
  templateUrl: './applicant-registration.component.html',
  styleUrl: './applicant-registration.component.css'
})

export class ApplicantRegistrationComponent implements OnInit , OnDestroy{

  constructor(private fb : FormBuilder , private userService : UserService){}

  @Output() role  = new EventEmitter<any>(); 

  currentRole : string = 'APPLICANT' ;

  


  ngOnInit(): void {
    this.role.emit("APPLICANT") ;
  }

  ngOnDestroy(): void {
    this.role.emit(undefined);
  }
  applicantRegisterForm = this.fb.group({

    firstName:[undefined,[Validators.required]],
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
  
  register(){
    if(this.applicantRegisterForm.valid){

      let applicant  = new Applicant() ;
      
      // applicant = this.ApplicantFromForm();
      // this.userService.save_user(applicant).subscribe((status: number) => {
        
      //   console.log(status);
        
      // });
    }
    console.log('registered');
  }

  ApplicantFromForm() {
    let formValues = this.applicantRegisterForm.value;
    let applicant = {
      username: formValues.username,
      password: formValues.password,
      email: formValues.email,
      applicantFirstname: formValues.firstName,
      applicantLastname: formValues.lastName,
      userPhoneNumber: formValues.phoneNumber,
      userJoinDate: new Date(), // Assuming the join date is the current date
      applicantBirthday: formValues.dateOfBirth,
      notifications: [],
      alerts: [],
      applicantProfile: null
    };
    return applicant;
  }
  
}
