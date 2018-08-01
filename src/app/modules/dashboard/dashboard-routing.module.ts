import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardContainer } from "./containers/dashboard-container/dashboard.container";

const routes: Routes = [
  { path: "", component: DashboardContainer },
  { path: "dashboard", component: DashboardContainer }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
