import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',

  template: `<div>
    <h2>Welcome {{ parentData }}!</h2>
    <h2>You are {{ age }}.</h2>

    <button (click)="fireEvent()"> Send Event </button>
    

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

  // Use Output decorator when data binding is from child to parent component
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fireEvent(){
    this.childEvent.emit("This is from test component (child) to app component (parent)");
  }

}
