import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/authentication/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import { ProfileSetupComponent } from '../profile-setup/profile-setup.component';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports : [ ProfileSetupComponent ,  StepperModule , CardModule , ReactiveFormsModule , FloatLabelModule , ButtonModule  ,CommonModule , RouterLink , CalendarModule , InputTextModule],
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.css'
})
export class CompanyRegistrationComponent {


  constructor(private fb : FormBuilder , private authService : AuthService){

  }

  currentRole : string = 'COMPANY' ;

  companyRegisterForm = this.fb.group({ 
    
    username : [undefined  , Validators.required] , 
    password:[undefined , Validators.required   ] , 
    passwordAgain:[undefined, Validators.required],
    compLabel : [undefined , [Validators.required]],
    compCreationDate : [undefined , [Validators.required]] , 
    email: [undefined , Validators.email],
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

  registerCompany(){
  }
  

}
