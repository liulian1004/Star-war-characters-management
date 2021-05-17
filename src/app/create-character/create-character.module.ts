
//create sub module for complicated features

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CreateCharacterComponent } from "./create-character.component";

@NgModule({
  declarations:[
     CreateCharacterComponent
  ],
  imports: [
    FormsModule,
    CommonModule, //instead of BrowseModule, which only allow import to the app.module
    RouterModule.forChild([
      { path:'', component: CreateCharacterComponent}
    ])

  ]

})
export class CreateCharacterModule {

}
