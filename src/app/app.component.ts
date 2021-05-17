import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './start-wars.service';

@Component({
  selector: 'app-root', //css selector, normally here is the element selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  swService:StarWarsService;
  constructor(swService:StarWarsService){
    this.swService= swService;
  }
  ngOnInit(): void {
    this.swService.fetchCharacters()
  }
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
