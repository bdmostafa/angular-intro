import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { IStudent } from './student';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private _url: string = '/assets/data/students.json';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.http
      .get<IStudent[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
