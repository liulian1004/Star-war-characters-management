import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../start-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters!: {
    name: string;
    side: string;
  }[];
 // swWarService: StarWarsService;

  //chosenList = 'all'; //side info, the default one is all
  // constructor(swWarService:StarWarsService) {
  //   this.swWarService = swWarService;
  // }
  constructor(){}

  ngOnInit(): void {
  }
  // getCharacter() {
  //    this.characters = this.swWarService.getCharacters(this.chosenList)
  //    return this.characters;
  // }
  // onChoose(side:string){
  //   this.chosenList = side;
  // }

  // onSideChoose(charInfo:{name:string, side:string}){
  //   // assign index to pos if return true

  // }

}
