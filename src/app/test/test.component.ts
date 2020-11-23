import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',

  // Using class dot character
  // selector: '.app-test-with-class',

  // Using [ ]
  selector: '[app-test-attribute]',
  
  // templateUrl: './test.component.html',

  // Using inline template
  template: `<div>
              <h2> Hi {{ user.toUpperCase() }}! </h2>
              <h4> {{ wlcMessage() }}. </h4> 
              Inline template text here ... <br />
              This is sample from test component
            </div>`,

  // styleUrls: ['./test.component.css']

  // Using style property
  styles: [`
    div {
      color: green
    }
  `]
})
export class TestComponent implements OnInit {

  // Dynamically interpolation from class to template
  public user = 'Mostafa';

  wlcMessage() {
    return `You have choosen the right place, ${this.user}`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
