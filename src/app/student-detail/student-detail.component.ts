import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  template: `
  <div>
      <h2>Student Detail</h2>
      <ul *ngFor="let student of students">
        <li> {{ student.id }} - {{ student.name }} - {{ student.age }} </li>
      </ul>
    </div>
  `,
  styles: [`
  
  `]
})
export class StudentDetailComponent implements OnInit {

  public students = [];

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this._studentService.getStudents();
  }

}
