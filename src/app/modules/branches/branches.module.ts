import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";


import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './components/branches/branches.component';

import { BranchesContainer } from './containers/branches/branches.container';
import { MaterialModule } from "../../material.module";

@NgModule({
  imports: [
    CommonModule,
    BranchesRoutingModule,SharedModule,MaterialModule
  ],
  
  declarations: [BranchesComponent, BranchesContainer]
})
export class BranchesModule { }
