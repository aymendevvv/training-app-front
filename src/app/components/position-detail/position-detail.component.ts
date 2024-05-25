import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { ActivatedRoute } from '@angular/router';
import { TrainingPosition } from '../../interfaces/training-position';
import { TrainingPositionsService } from '../../services/positions/training-positions.service';

@Component({
  selector: 'app-position-detail',
  standalone: true,
  imports: [FieldsetModule ,  InputTextModule , SplitButtonModule,  CardModule , ButtonModule , ToolbarModule],
  templateUrl: './position-detail.component.html',
  styleUrl: './position-detail.component.css'
})
export class PositionDetailComponent implements OnInit {
  positionId: number = 0 ; 
  options: MenuItem[] | undefined; 
  T_position :TrainingPosition | undefined ; 

  constructor(private route: ActivatedRoute , private T_positionsService: TrainingPositionsService) { 
    this.positionId = this.route.snapshot.params['id'];
    this.T_positionsService.getTrainingPositionById(this.positionId).subscribe(res => { this.T_position = res});

  }

  ngOnInit() {
    this.options = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];
}

 }
