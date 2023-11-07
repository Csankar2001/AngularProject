import { Component } from '@angular/core';

@Component({
   selector: 'app-test',
  //2nd way: selector: '.app-test', we also need to change in app.component.html file
  //3rd way:selector: '[app-test]',
  //templateUrl: './test.component.html',//can also write as a Template as shown below
  styleUrls: ['./test.component.scss'],
  template:`<input [id]="Id" type="text" value ="chandan">
  <input id="{{Id}}" type="text" value ="chandan">`
  
  /*
  Below this first one is property binding and 2nd one is interpolation 
  `<input [id]="Id" type="text" value ="chandan">
  <input id="{{Id}}" type="text" value ="chandan">`*/
  /*Interpolation-----------
  ====================
  `<h2>
   Wlcome {{name}}</h2>
   <h2> {{name.length}}</h2>
   <input type="text" value ="chandan">
   <h2> {{name.toUpperCase()}}</h2>
   <h2> {{greetUser()}}</h2>
   <h2> {{siteUrl}}</h2>

   `*/
})
export class TestComponent {
  public name ="Chandan";
  public Id="testId";
  public siteUrl=window.location.href;
  greetUser(){
    return "Hello"+this.name;
  }
}
