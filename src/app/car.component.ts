import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-car',
  template: `
  <input type ="text"  [(ngModel)]="newWord">
  <!--if no inputword, it will show this sentence-->
  <p *ngIf="newWord === ''">Please enter a value!</p>
   <!--directive ngClass: different button style for non-input or has input -->
  <button (click)="onAddItem()" class="btn"
  [ngClass] = "{'btn-primary': newWord !== '', 'btn-default': newWord === ''}"> click to add into array</button>
  <hr>
   <ul class = "list-group">
     <!--directive *ngFor: for loop each item in the items , put the printed item into {{ }} -->
     <!--ngStyle: odd is blue, even is yellow-->
     <li class="list-group-item"
     *ngFor="let item of items; let i = index"
     [ngStyle] ="{backgroundColor: i%2 === 0? 'yellow' : 'blue'}"
     >{{item}}</li>
   </ul>
  `
})
export class CarComponent{
  newWord:string = "";

  @Input()
  items: Array<String> = []; // something setable from outside

   @Output()
  itemAdded = new EventEmitter<string>(); //export this emitter, listen to the outside

  constructor(){
  }
  onAddItem(){
    this.itemAdded.emit(this.newWord)
  }

}
