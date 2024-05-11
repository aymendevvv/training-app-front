import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"search",
        component:SearchComponent
      },

      {
        path:"**",
        redirectTo:"home",
        pathMatch:'full'
      }
    
];
