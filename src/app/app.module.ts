import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from './student.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
