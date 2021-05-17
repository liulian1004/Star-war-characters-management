import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <input type = "text" [(ngModel)]= "context">
  <p> {{context}} is {{state}}</p>
  <button (click) = "onClick()">click to finish loading</button>
  `
})
export class DashBoardComponent {
   context = 'something'
   state = 'loading';

   onClick(){
     this.state = 'finished'
   }
}
