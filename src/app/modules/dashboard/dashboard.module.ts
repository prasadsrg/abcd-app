import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MaterialModule } from "../../material.module";
import { DashboardContainer } from "./containers/dashboard-container/dashboard.container";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, SharedModule],
  declarations: [DashboardComponent, DashboardContainer]
})
export class DashboardModule {}
