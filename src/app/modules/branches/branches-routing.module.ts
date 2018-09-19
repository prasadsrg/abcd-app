import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesContainer } from './containers/branches/branches.container';

const routes: Routes = [
  { path: "", component: BranchesContainer },

  { path: "branches", component : BranchesContainer }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
