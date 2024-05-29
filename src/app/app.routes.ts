import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PositionsSearchComponent } from './components/positions-search/positions-search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';
import { ApplicantRegistrationComponent } from './components/applicant-registration/applicant-registration.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent , 
        children :[
          {path:"applicant" , component: ApplicantRegistrationComponent } , 
          {path:"company" , component: CompanyRegistrationComponent } , 
          
        ]
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"search/:query",
        component:PositionsSearchComponent
      },
      {
        path:"position/:id",
        component:PositionDetailComponent
      },
      {
        path:"applicantprofile",
        component:ApplicantProfileComponent
      },
      {
        path:"companyprofile",
        component:CompanyProfileComponent
      },

      {
        path:"**",
        redirectTo:"home",
        pathMatch:'full'
      }
    
];
