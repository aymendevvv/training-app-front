import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-applicant-profile',
  standalone: true,
  imports: [ChipModule , ButtonModule , TabViewModule , CalendarModule , CommonModule ], 
  templateUrl: './applicant-profile.component.html',
  styleUrl: './applicant-profile.component.css'
})
export class ApplicantProfileComponent {

  defaultBrithDate: Date = new Date("January 31 1980 12:30");

}
