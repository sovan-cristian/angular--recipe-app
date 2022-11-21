import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'course-project';
  finallyWhichOne = 'Recipes';
  optionChosen(ev: any) {
    this.finallyWhichOne = ev;
  }
}
