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

  constructor() { }

  ngOnInit(): void {
  }

}
