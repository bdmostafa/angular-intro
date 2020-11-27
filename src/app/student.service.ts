import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url: string = "/assets/data/students.json";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url);
  }
}
