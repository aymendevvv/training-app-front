import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchItemComponent } from '../search-item/search-item.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ SearchItemComponent ,  CardModule , ToolbarModule , ButtonModule , InputTextModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
