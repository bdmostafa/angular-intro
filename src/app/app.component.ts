import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular fundamentals';

  public name = "Mostafa";
  public age = 29;

  public message = "";
  

  constructor() {}
}
