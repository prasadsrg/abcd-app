import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesSearchContainer } from './containers/branches-search/branches-search.container';
import { BranchesEditContainer } from './containers/branches-edit/branches-edit.container';


  
const routes: Routes = [
  { path: "", component: BranchesSearchContainer },

  // { path: "branches", component : BranchesContainer },
  // { path: "branches-edit", component : BranchesEditContainer }
  { path: "search", component: BranchesSearchContainer},
  { path: "edit", component:BranchesEditContainer}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
