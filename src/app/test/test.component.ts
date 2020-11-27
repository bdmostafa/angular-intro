import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',

  template: `<div>
    <h2> {{ name | lowercase }}!</h2>
    <h2> {{ name | uppercase }}!</h2>
    <h2> {{ message | slice:11:15 }} </h2>
    <h2> {{ message | titlecase }}!</h2>
    <h2>{{ myObj | json }}</h2>

    <h2> {{ 1.2345 | number:'1.2-3' }} </h2>
    <h2> {{ 1.2345 | number:'3.4-5' }} </h2>
    <h2> {{ 1.2345 | number:'7.1-2' }} </h2>

    <h2> {{ 0.75 | percent }} </h2>
    <h2> {{ 0.75 | currency }} </h2>
    <h2> {{ 0.75 | currency : 'EUR' }} </h2>
    <h2> {{ 0.75 | currency : 'EUR' : 'code' }} </h2>

    <h2> {{ date }} </h2>
    <h2> {{ date | date:'short'}} </h2>
    <h2> {{ date | date:'shortDate'}} </h2>
    <h2> {{ date | date:'shortTime'}} </h2>
    <h2> {{ date | date:'medium'}} </h2>
    <h2> {{ date | date:'mediumDate'}} </h2>
    <h2> {{ date | date:'mediumTime'}} </h2>

    

  </div>`,

  styles: [
    `
      div {
        background: lightgrey;
        width: 50%;
        display: inline-block;
        border-radius: 10px;
        padding: 20px;
      }
    `,
  ],
})
export class TestComponent implements OnInit {

  public name = "Mostafa";
  public message = "Welcome to Angular";
  public myObj = {
    "fName": "Mostafa",
    "lName": "Mahmud",
    "profession": "Web Developer"
  }

  public date = new Date();

  constructor() {}

  ngOnInit(): void {}

}
