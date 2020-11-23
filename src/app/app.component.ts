import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor)
  //store the original function in a variable
  const original = descriptor.value;

  // Do some manipulaors with descriptor.value
  descriptor.value = function(...args) {
    console.log("Args", args, " were passed in this function")
    const result = original.apply(this, args);
    console.log("the result of the function is ", result);
    return result;
  }

  return descriptor;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Build With Innovation Ltd.';

  constructor() {
    console.log("The statement was generated thruogh constructor", this.testMethod(1, 2, 3));
  }

  @log
  testMethod(x, y, z){
    return x + y +z;
  }

}
