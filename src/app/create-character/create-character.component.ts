import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from '../start-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSide =[
    {display:'None', value: ''},
    {display:'Light', value: 'light'},
    {display:'Dark', value: 'dark'}
  ]
  swService: StarWarsService
  constructor(swService:StarWarsService) {
    this.swService = swService
   }

  ngOnInit(): void {
  }
  onSubmit(submitText:NgForm){
    // need to work with require attribute in the html
    if(submitText.invalid){
      return;
    }
    console.log("text: ", submitText.value)
    this.swService.addCharacter(submitText.value.name, submitText.value.side)
  }
}
