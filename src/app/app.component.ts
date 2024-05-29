import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ScrollDirective } from './directives/scroll.directive';
import { FooterComponent } from './components/footer/footer.component';
import { PositionsSearchComponent } from './components/positions-search/positions-search.component';
import { LoginComponent } from './components/login/login.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PositionsSearchComponent ,  FooterComponent,  RouterOutlet, HeaderComponent , HttpClientModule , HomeComponent , ScrollDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  subscription!: Subscription; 

  constructor(private router: Router){

  }
  title = 'training-app-front';
  isLoggedIn  = false ; 
  loggedUser!: string ; 
  userType!: string ;

  handleLogin(loggedIn: boolean): void  {
    this.isLoggedIn = loggedIn;
  }
  handleLoggedUser(loggedUser: string): void {
    this.loggedUser = loggedUser;
  }
  handleUserType(userType: string): void {
    this.userType = userType;
  }
  //TODO: fix this mess later
  subscribeToEmitter(componentRef:any){
    if(!(componentRef instanceof LoginComponent)){
      return;
    }
    const child: LoginComponent = componentRef;
    child.loggeduser.subscribe((loggedUser: string) => {
      this.handleLoggedUser(loggedUser)
      console.log('loggedUser:', loggedUser)
    });
    child.userType.subscribe((userType: string) => {
      this.handleUserType(userType)
      console.log('userType:', userType)});
      
    child.loggedIn.subscribe((loggedIn: boolean) =>{ 
      this.handleLogin(loggedIn)
      console.log('loggedIn:', loggedIn)
      if(this.isLoggedIn){
        if(this.userType === 'APPLICANT'){
          console.log('redirecting to home page')
          this.router.navigate(['/applicantprofile']);
        }else if(this.userType === 'COMPANY'){
          console.log('redirecting to recruiter page')
          this.router.navigate(['/companyprofile'])
        }
      }
    });
      
    }
    
    
    unsubscribeFromEmitter(){
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }

  ngOnInit(): void {
      
    }
  
}
