import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PositionsSearchComponent } from './components/positions-search/positions-search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';

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
        path:"search/:query",
        component:PositionsSearchComponent
      },
      {
        path:"position/:id",
        component:PositionDetailComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },

      {
        path:"**",
        redirectTo:"home",
        pathMatch:'full'
      }
    
];
