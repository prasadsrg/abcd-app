import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesContainer } from './containers/branches/branches.container';
import { BranchesEditContainer } from './containers/branches-edit/branches-edit.container';


  
const routes: Routes = [
  { path: "", component: BranchesContainer },

  { path: "branches", component : BranchesContainer },
  { path: "branches-edit", component : BranchesEditContainer }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
