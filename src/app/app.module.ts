import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { LogService } from './log.service';
import { HeadComponent } from './head/head.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


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
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StarWarsService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
