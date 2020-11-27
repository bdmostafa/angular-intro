import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents() {
    return [
      {"id": 1, "name": "Mostafa", "age": 29},
      {"id": 2, "name": "Shafee", "age": 32},
      {"id": 3, "name": "Shams", "age": 31},
    ]
  }
}
