import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',

  template: `<div>
    <h2>Welcome {{ parentData }}!</h2>
    <h2>You are {{ age }}!</h2>
    

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
  
  // Use input decorator because it is not the normal property and it is from the parent component
  @Input() public parentData;

  // Refering parenData as name 
  @Input('parentDataAge') public age;

  constructor() {}

  ngOnInit(): void {}
}
