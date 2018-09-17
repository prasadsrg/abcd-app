import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileSearchComponent } from "./containers/profile-search/profile-search.component";
import { ProfileEditComponent } from "./containers/profile-edit/profile-edit.component";

const routes: Routes = [
  { path: "", component: ProfileSearchComponent },
  { path: "search", component: ProfileSearchComponent },
  { path: "edit", component: ProfileEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
