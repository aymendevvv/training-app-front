import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

interface Degree {
  name: string;
  code: string;

}

@Component({
  selector: 'app-profile-setup',
  standalone: true,
  imports: [ToastModule, DropdownModule , FileUploadModule , FormsModule , CommonModule ],
  providers:[MessageService] , 
  templateUrl: './profile-setup.component.html',
  styleUrl: './profile-setup.component.css'
})
export class ProfileSetupComponent implements OnInit {

  

  @Input() userRole: string  = '' ; 

  constructor(private messageService: MessageService) { }

  degrees: Degree[]| undefined ; 
  selectedDegree: Degree | undefined ;
  
  ngOnInit(): void {
    this.degrees = [
      {name: 'Bachelor of Science', code: 'BSc'},
      {name: 'Master of Science', code: 'MSc'},
      {name: 'Doctor of Philosophy', code: 'PhD'}
    ];
  }

  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
}
  
}
