import {Component, EventEmitter, Input, Output } from '@angular/core'; // import decorator

@Component({
// the element name which can be used by other components
//ex in the html
//<app-user></app-user>
  selector: 'app-user',
  // the rote of html file or you can write html directly in the template
  //templateUrl: './app-user.html',
  //inline template
  template:  `
  <input type="text" (input) = "onUserInput($event)">
  <!-- <input type="text" [(ngModel)]="name"> -->
  <p> Hello {{name}}</p>
  <p> This is the user component</p>
  <app-user-detail></app-user-detail>
  `,
  // style css file router
  //styleUrls: './cssfile',
})
export class UserComponent {
  @Input()
  name = 'lian';

  @Output()
  nameChanged = new EventEmitter<string>(); // listen to the input from parent compoent, which here is app.compoent.ts

  onUserInput(event:Event) {
    //this.name = (event.target as HTMLInputElement).value;
    this.nameChanged.emit((event.target as HTMLInputElement).value);
  }
}
