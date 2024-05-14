import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';

import { FieldsetModule } from 'primeng/fieldset';
import { SplitButtonModule } from 'primeng/splitbutton';

import { InputTextModule } from 'primeng/inputtext';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  CardModule ,  FieldsetModule , PanelModule ,  ChipModule ,   ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule ,FlexLayoutModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    constructor(private route:Router){

    }
    
    items: MenuItem[] | undefined;


    submitSearch(val:string){
        console.log(val);
        this.route.navigate(['/search',val]);
        
    }

    ngOnInit() {
        this.items = [
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
