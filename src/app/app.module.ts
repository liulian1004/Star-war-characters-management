import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import {DashBoardComponent}from './dashborad.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CarComponent } from './car.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { StarWarsService } from './start-wars.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { LogService } from './log.service';
import { HeadComponent } from './head/head.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'characters', component: TabsComponent, children:[
    {path: '', redirectTo: 'all', pathMatch:'full'}, // the full path is empty, otherwise,it will catch all routes here
    {path: ':side', component: ListComponent} // sub router setup
  ]},
  {path:'new-characters', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters'} // any router not in the above list redirect to home page
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent, //add new component here
    DashBoardComponent,
    UserDetailComponent,
    CarComponent,
    TabsComponent,
    ItemComponent,
    ListComponent,
    CreateCharacterComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    StarWarsService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
