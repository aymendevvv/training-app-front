import { Injectable } from '@angular/core';
import { TrainingPosition } from '../../interfaces/training-position';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingPositionsService {

  constructor(private http:HttpClient) { }

  private baseUrl : string = "http://localhost:8080/trainingPositions" ; 

  getAllTrainingPositions(): Observable<TrainingPosition[]> {

    return this.http.get<TrainingPosition[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle the error here, e.g., log it or display a user-friendly message
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }

  getTrainingPositionById(id: number): Observable<TrainingPosition> {
    return this.http.get<TrainingPosition>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  
  getDummyData():TrainingPosition[]{
    return [
      {
        position_id: 1,
        position_description: "Software Engineer Intern",
        position_posting_date: "2024-05-15T18:02:25.266329",
        position_visibility: true,
        position_status: "OPEN",
        position_free_places: 5,
        position_work_type: "REMOTE",
        position_starting_date: "2024-04-01T09:00:00",
        position_duration: 3,
        position_requirements: "Bachelor's degree in Computer Science",
        position_image: "https://www.ausbildung.de/uploads/image/03/034a8c26-d4ad-4401-8c77-4d1fd6e8b824/" , 
        regions: [],
        notifications: [],
        company : "aymennenenen"
      },
      {
        position_id: 2,
        position_description: "Data Analyst Intern",
        position_posting_date: "2024-05-15T18:05:45.123456",
        position_visibility: true,
        position_status: "OPEN",
        position_free_places: 3,
        position_work_type: "REMOTE",
        position_starting_date: "2024-06-01T09:00:00",
        position_duration: 4,
        position_requirements: "Bachelor's degree in Statistics or related field",
        position_image: "https://www.ausbildung.de/uploads/image/75/75d0699e-616b-62e6-42ec-ef403ea4b9f7/" , 
        regions: [],
        notifications: [],
        company : "aymennenenen"
      },
      {
        position_id: 3,
        position_description: "Marketing Intern",
        position_posting_date: "2024-05-15T18:08:10.987654",
        position_visibility: true,
        position_status: "OPEN",
        position_free_places: 2,
        position_work_type: "REMOTE",
        position_starting_date: "2024-07-01T09:00:00",
        position_duration: 3,
        position_requirements: "Bachelor's degree in Marketing or related field",
        position_image: "https://www.ausbildung.de/uploads/image/c7/c7c65937-3bf7-4cc3-9415-8572acd83670/" , 
        regions: [],
        notifications: [],
        company : "aymennenenen"
      }
    ];
  }
  
  getTrainingPositions(){
    return Promise.resolve(this.getDummyData());
  }
}
