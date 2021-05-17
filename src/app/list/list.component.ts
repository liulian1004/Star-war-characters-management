import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { StarWarsService } from '../start-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters:{
    name: string;
    side: string;
  }[];
  subscription: Subscription = new Subscription;
  loadedSide = 'all';

  activatedRoute : ActivatedRoute;
  swService: StarWarsService
  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
    this.characters = [];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //subsribe the change of rotue
  //and read variable from router name params
  ngOnInit(): void {
  
    //this is async function
    //this is for register the subsrcibe
      this.activatedRoute.params.subscribe(
        (params) =>{
            this.characters = this.swService.getCharacters(params.side);
            this.loadedSide = params.side;
        }
      );
      this.subscription = this.swService.charactersChange.subscribe(
        () => {
          this.characters=this.swService.getCharacters(this.loadedSide)
        }
      )
  }

}
