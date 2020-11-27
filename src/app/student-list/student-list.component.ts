import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <div>
      <h2>Student Lists</h2>
      <ul *ngFor="let student of students">
        <li>{{ student.name }}</li>
      </ul>
    </div>
  `,
  styles: [
    `
      div {
       
      },
      
    `,
  ],
})
export class StudentListComponent implements OnInit {
  public students = [];

  constructor(private _studentService: StudentService) {}

  ngOnInit(): void {
    this._studentService
      .getStudents()
      .subscribe((data) => (this.students = data));
  }
}
