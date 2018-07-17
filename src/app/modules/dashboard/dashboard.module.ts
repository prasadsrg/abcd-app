import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MaterialModule } from "../../material.module";
import { DashboardContainerComponent } from "./containers/dashboard-container/dashboard-container.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
  declarations: [DashboardComponent, DashboardContainerComponent]
})
export class DashboardModule {}
