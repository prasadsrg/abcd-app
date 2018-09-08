import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDataContainer } from './containers/app-data/app-data.container';
import { AccessMenuContainer } from './containers/access-menu/access-menu.container';

const routes: Routes = [
  { path: "appdata", component : AppDataContainer },
  { path: "access_menu", component : AccessMenuContainer }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }