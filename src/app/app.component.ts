import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //css selector, normally here is the element selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test'; // can be used by the imported component html, ex in the app.co

  rootName = "origal Name";
  rootItem = ['Apples','Bananas'];
  onNameChanged(newName: string){
    this.rootName = newName;
  }

  onItemWasAdd(newItem:string){
    this.rootItem.push(newItem);
    console.log(this.rootItem)
  }

}
