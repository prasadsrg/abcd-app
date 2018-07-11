import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "auth" },
  {
    path: "welcome",
    loadChildren: "./modules/welcome/welcome.module#WelcomeModule"
  },
  {
    path: "auth",
    loadChildren: "./modules/auth/auth.module#AuthModule"
  },
  {
    path: "dashboard",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppdRoutingModule {}
