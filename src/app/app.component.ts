import { Component } from '@angular/core';
//component decorator
@Component({
  selector: 'app-root',//custom html class used in Appcomponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnAngular';
}
