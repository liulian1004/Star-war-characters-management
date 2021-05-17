import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";

@Injectable()
export class StarWarsService {
  private logService:LogService
  private characters = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];
  charactersChange = new Subject<void>();

  constructor(logService:LogService){
    this.logService = logService;
  }
  getCharacters(chosenList:string) {
    if (chosenList === "all") {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo:{name:string, side:string}) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    // once change the side, it will also refresh the current page
    // here is emit the new event
    this.charactersChange.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }
  addCharacter(name:string, side:string){
    // find whether the array has duplicated ones
      const pos = this.characters.findIndex((char) =>{
        return char.name === name;
      })
      if(pos !== -1){
        return;
      }
      const ele = {name:name, side:side}
      this.characters.push(ele)

  }
}
