import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ChipModule , ButtonModule , TabViewModule , CalendarModule , CommonModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  defaultBrithDate: Date = new Date("January 31 1980 12:30");

}
