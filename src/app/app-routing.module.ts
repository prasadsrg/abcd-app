import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "welcome" },
  {
    path: "welcome",
    loadChildren: "./modules/welcome/welcome.module#WelcomeModule"
  },
  {
    path: "dashboard",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppdRoutingModule {}
