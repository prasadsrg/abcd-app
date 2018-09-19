import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";


import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsContainer } from './containers/reports.container';
import { MaterialModule } from "../../material.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    MaterialModule
  ],
  declarations: [ReportsComponent, ReportsContainer]
})
export class ReportsModule { }
