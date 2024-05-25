import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';

import { FieldsetModule } from 'primeng/fieldset';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import { InputTextModule } from 'primeng/inputtext';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  CardModule ,  FieldsetModule , PanelModule ,  ChipModule ,   ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule ,FlexLayoutModule , FlexLayoutServerModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    constructor(private route:Router  , private usersService: UserService){
        
    }
    
    items: MenuItem[] | undefined;


    submitSearch(val:string){
        console.log(val);
        this.route.navigate(['/search',val]);
        
    }

    ngOnInit() {
        this.usersService.getAllUsers().subscribe((data) => (console.log(data)));

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
