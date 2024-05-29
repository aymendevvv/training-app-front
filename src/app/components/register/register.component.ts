import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService} from '../../services/authentication/auth.service';

import { FloatLabelModule } from 'primeng/floatlabel';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { profile } from 'console';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../../services/user/user.service';
import { User } from '../../../models/user.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [  CardModule,InputTextModule, ReactiveFormsModule,ButtonModule, RouterModule, CommonModule , FormsModule , IconFieldModule , FlexLayoutModule  , FloatLabelModule , CalendarModule],
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private fb:FormBuilder , private userService:UserService){
  }

  message: string | undefined = undefined ;
  selectedRole ?: string  ; 
  headerTitle :string = "Register as : " ;


  loginError: string = '' ; 



  

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
  companyRegisterForm = this.fb.group({ 
    
    companyName : [undefined , [Validators.required]],
    password:[undefined , Validators.required   ] , 
    passwordAgain:[undefined, Validators.required],
    email: [undefined , Validators.email],
    phoneNumber:[undefined], 
    profile: null 
  });

  pickRole(role:string|undefined):void{
    console.log(`this.selectedRole = ${role}`); 
    this.selectedRole =  role ;
  }

  


  createUserFromForm(): User {
        let formValues = this.applicantRegisterForm.value;
        let user:User  = {
          user_id: 0 , 
          username: formValues.username || null,
          user_password: formValues.password || null, 
          user_join_date: new Date() , 
          user_status: 'ACTIVE',
          user_phone_number: formValues.phoneNumber || null, 
          email: formValues.email || null, 
          notifications: [], // replace with actual value
          alerts: [],
        };
        return user;
      }
      

    register(){
      if(this.applicantRegisterForm.valid){
        let user = this.createUserFromForm();
        this.userService.save_user(user).subscribe((status: number) => {
          
          console.log(status);
          if(status == 200){
            this.message = "successfully registered" ;
          }else{
            this.message = "failed to register" ; 
          }
        });
      }
      console.log('registered');
    }
    }
