import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  private logService:LogService
  private characters = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];
  charactersChange = new Subject<void>();
  private http:Http;
  constructor(logService:LogService, http:Http){
    this.logService = logService;
    this.http = http;
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

  fetchCharacters(){
      //this.http.post("url",....)
      //http need to work with subscribe
      //map
      this.http.get("https://swapi.dev/api/people")
    // the import method of map is different
      .map((response:Response) =>{ // change json to js object
        const data = response.json();
        //extract the name to chars
        const chars = data.results.map((char:{name:string, side:string})=>{
          return {name:char.name, side: ''};
        });
        return chars;
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.characters = data;
          this.charactersChange.next(); // update page once get new data
        })

  }

}
