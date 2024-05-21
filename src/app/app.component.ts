import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ScrollDirective } from './directives/scroll.directive';
import { FooterComponent } from './components/footer/footer.component';
import { PositionsSearchComponent } from './components/positions-search/positions-search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PositionsSearchComponent ,  FooterComponent,  RouterOutlet, HeaderComponent , HttpClientModule , HomeComponent , ScrollDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training-app-front';
  
}
