import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsContainer } from './containers/reports.container';

const routes: Routes = [
  { path: "", component: ReportsContainer },

  { path: "reports", component : ReportsContainer }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
