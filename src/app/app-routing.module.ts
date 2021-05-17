import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';

const routes = [
  {path: 'characters', component: TabsComponent, children:[
    {path: '', redirectTo: 'all', pathMatch:'full'}, // the full path is empty, otherwise,it will catch all routes here
    {path: ':side', component: ListComponent} // sub router setup
  ]},
  //instead of loading component directly, here it loading the router child, inside of create-character.module.ts#className', it will have router config
  {path:'new-characters', loadChildren: './create-character/create-character.module.ts#CreateCharacterModule'},
  {path: '**', redirectTo: '/characters'} // any router not in the above list redirect to home page
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
