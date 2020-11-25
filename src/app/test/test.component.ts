import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',

  template: `<div>
    <h2>Welcome {{ user }}!</h2>
    <h3>ngIf examples</h3>
    <p *ngIf="true">This is ngIf truthy example *ngIf="true"</p>
    <p *ngIf="false">This is ngIf falsy example.</p>

    <p *ngIf="displayMsg">With assigning property value *ngIf="displayName"</p>

    <p *ngIf="displayMsg2; else elseBlock">
      With assigning property value *ngIf="displayName"
    </p>

    <p *ngIf="displayMsg3; then thenBlock; else elseBlock"></p>

    <ng-template #thenBlock>
      <p>Message from thenBlock...</p>
    </ng-template>

    <ng-template #elseBlock>
      <p>Message is hidden from elseBlock</p>
    </ng-template>

    
    <div [ngSwitch]="status">
      <h3>ngSwitch examples</h3>
      <p *ngSwitchCase="'programmer'">You are a programmer</p>
      <p *ngSwitchCase="'teacher'">You are a teacher</p>
      <p *ngSwitchCase="'learner'">You are a learner</p>
      <p *ngSwitchDefault>Try again</p>
    </div>

    <h3>ngFor examples</h3>
    <h4 *ngFor="let color of colors; index as i">
    <p> {{ i + 1 }} {{ color }}</p> 
    </h4>

  </div>`,

   // <h4 *ngFor="let color of colors; first as f">
  //   <p> {{ f }} {{ color }}</p>

   // <h4 *ngFor="let color of colors; last as l">
  //   <p> {{ l }} {{ color }}</p>

  // <h4 *ngFor="let color of colors; odd as o">
  //   <p> {{ o }} {{ color }}</p>

  // <h4 *ngFor="let color of colors; even as e">
  //   <p> {{ e }} {{ color }}</p>

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
  public user = 'Mostafa';
  public displayMsg = true;
  public displayMsg2 = false;
  public displayMsg3 = true;

  public status = "programmer";

  public colors = ["red", "blue", "green"];

  constructor() {}

  ngOnInit(): void {}
}
