import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { jwtInterceptor } from './services/authentication/jwt-interceptor.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { errorInterceptor } from './services/authentication/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration() ,
    CookieService, 
    provideRouter(routes), 
    provideAnimations(),
    provideHttpClient(withInterceptors([
      jwtInterceptor ,
      errorInterceptor
    ]))

    ]
  
};

