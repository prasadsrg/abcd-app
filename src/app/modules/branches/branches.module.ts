import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";

import { BranchesRoutingModule } from "./branches-routing.module";
import { BranchesComponent } from "./components/branches/branches.component";

import { BranchesContainer } from "./containers/branches/branches.container";
import { BranchesSearchContainer } from "./containers/branches-search/branches-search.container";
import { MaterialModule } from "../../material.module";
import { BranchesEditComponent } from "./components/branches-edit/branches-edit.component";
import { BranchesEditContainer } from "./containers/branches-edit/branches-edit.container";
import { BranchesService } from "./branches.service";
import { BranchesDetailsComponent } from "./components/branches-details/branches-details.component";
import { BranchesAddressComponent } from "./components/branches-address/branches-address.component";
import { BranchesFilterComponent } from "./components/branches-filter/branches-filter.component";

@NgModule({
  imports: [CommonModule, BranchesRoutingModule, SharedModule, MaterialModule],

  declarations: [
    BranchesComponent,
    BranchesContainer,
    BranchesEditComponent,
    BranchesEditContainer,
    BranchesDetailsComponent,
    BranchesAddressComponent,
    BranchesSearchContainer,
    BranchesFilterComponent
  ],
  providers: [BranchesService]
})
export class BranchesModule {}
