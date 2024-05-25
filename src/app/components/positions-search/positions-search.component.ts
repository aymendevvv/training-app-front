import { Component } from '@angular/core';
import { TrainingPosition } from '../../interfaces/training-position';
import { TrainingPositionsService } from '../../services/positions/training-positions.service';
import { SliderModule } from 'primeng/slider';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-positions-search',
  standalone: true,
  imports: [ RouterModule,  CalendarModule ,  CheckboxModule ,  DropdownModule ,  SliderModule , FormsModule ,   CommonModule , TagModule,  DataViewModule ,  CardModule , ToolbarModule ,ButtonModule , InputTextModule],
  templateUrl: './positions-search.component.html',
  styleUrl: './positions-search.component.css'
})
export class PositionsSearchComponent {
  
  constructor(private trainingPositionsService: TrainingPositionsService){
    
  }

  date !: Date ;

  degrees!: string[]; 
  selectedDegree!: string;
  trainingType !:string[]; 

  value:number = 50  ; 

  trainingPositions!: TrainingPosition[];

  ngOnInit() {
    // this.T_positionsService.getTrainingPositions().then((data) => (this.T_positions = data.slice(0, 5)));
    this.trainingPositionsService.getAllTrainingPositions().subscribe((data) => (this.trainingPositions = data.slice(0, 5)));
  
    this.degrees = [
      'All',
      'Bachelors',
      'Masters',
      'Doctorate'
    ];
}
getSeverity (trainingPosition: TrainingPosition) {
  switch (trainingPosition.position_status) {
      case 'OPEN':
          return 'success';

      case 'LOWSTOCK':
          return 'warning';

      case 'OUTOFSTOCK':
          return 'danger';

      default:
          return null;
  }
};
}
