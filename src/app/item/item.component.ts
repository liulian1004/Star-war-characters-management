import { Component, Input, OnInit} from '@angular/core';
import {StarWarsService,} from '../start-wars.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  swWarsService:StarWarsService;

  @Input()
  character! : {
    name: string;
    side: string;
  };

  constructor(swWarService:StarWarsService) {
    this.swWarsService = swWarService;
  }

  ngOnInit(): void {
  }

  onAssign(side:string){
    //this.character.side = side; not good pratice, hard to control where to change the data, here to export to tab
    this.swWarsService.onSideChosen({name:this.character.name, side:side})

  }
}
