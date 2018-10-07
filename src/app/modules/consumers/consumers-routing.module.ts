import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumersSearchContainer } from './containers/consumers-search/consumers-search.container';
import { ConsumersEditContainer } from './containers/consumers-edit/consumers-edit.container';
 


const routes: Routes = [ 
   

  { path: "", component: ConsumersSearchContainer },
  { path: "search", component: ConsumersSearchContainer },
  { path: "edit", component: ConsumersEditContainer }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumersRoutingModule { }
