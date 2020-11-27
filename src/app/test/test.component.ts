import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',

  template: `<div>

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

  constructor() {}

  ngOnInit(): void {}

}
