import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { jwtInterceptorInterceptor } from './services/authentication/jwt-interceptor.interceptor';
import { CookieService } from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideClientHydration() ,
    provideRouter(routes), 
    provideAnimations(),
    provideHttpClient(withInterceptors([
      jwtInterceptorInterceptor
    ]))

    ]
  
};

