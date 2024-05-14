import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ChipModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
