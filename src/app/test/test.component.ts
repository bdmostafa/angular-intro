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
    <h2 [class]="successClass">
      Hi <span [class]="italicClass">{{ user.toUpperCase() }}!</span> 
    </h2>
    <h4 [class.text-info]="noError">{{ wlcMessage() }}.</h4>
    Inline template text here ... <br />
    This is sample from test component

    <h4 [ngClass]="msgClassess"> This is multiple classess binding </h4>

    <p>
      Property binding: <br />
      <input [id]="myId" type="text" value="Mostafa" />
      <input
        bind-disabled="isDisabled"
        id="{{ myId }}"
        type="text"
        value="Mostafa"
      />
    </p>
  </div>`,

  // styleUrls: ['./test.component.css']

  // Using style property
  styles: [`
    div {
      background: lightgrey;
      width: 50%;
      display: inline-block;
      border-radius: 10px;
      padding: 20px;
    }
    .text-success {
      color: green;
    }
    .text-info {
      color: blue;
    }
    .text-italic {
      font-style: italic;
    }
    .text-bold {
      font-weight: bold;
    }
    .text-danger {
      color: red;
    }

  `],
})
export class TestComponent implements OnInit {
  // Dynamically interpolation from class to template
  public user = 'Mostafa';

  wlcMessage() {
    return `You have choosen the right place, ${this.user}`;
  }

  // Interpolation - property binding
  public myId = 'my-id';
  public isDisabled = true;

  // Class binding
  public successClass = "text-success";
  public italicClass = "text-italic";
  // Conditionally apply on a single class and multiple classess
  public noError = true;
  public isSpecial = true;
  public msgClassess = {
    "text-success": this.noError,
    "text-danger": !this.noError,
    "text-italic": this.isSpecial

  }

  constructor() {}

  ngOnInit(): void {}
}
