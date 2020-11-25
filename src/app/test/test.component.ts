import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',

  template: `<div>
            <h2> Welcome {{ user }}! </h2>
            <p *ngIf="true"> This is ngIf truthy example *ngIf="true" </p>
            <p *ngIf="false"> This is ngIf falsy example. </p>

            <p *ngIf="displayMsg"> With assigning property value *ngIf="displayName" </p>

            <p *ngIf="displayMsg2; else elseBlock"> With assigning property value *ngIf="displayName" </p>

            <p *ngIf="displayMsg3; then thenBlock; else elseBlock"></p>

            <ng-template #thenBlock>
              <p>Message from thenBlock...</p>
            </ng-template>

            <ng-template #elseBlock>
              <p>Message is hidden from elseBlock</p>
            </ng-template>
          </div>`,

  styles: [`
    div {
      background: lightgrey;
      width: 50%;
      display: inline-block;
      border-radius: 10px;
      padding: 20px;
    }

  `],
})
export class TestComponent implements OnInit {

  public user = "Mostafa";
  public displayMsg = true;
  public displayMsg2 = false;
  public displayMsg3 = true;

  constructor() {}

  ngOnInit(): void {}
}
