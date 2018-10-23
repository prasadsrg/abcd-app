import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthService } from "./shared/service/auth.service";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "welcome" },
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
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthService]
  },
  {
    path: "profile",
    loadChildren: "./modules/profile/profile.module#ProfileModule",
    canActivate: [AuthService]
  },
  {
    path: "access",
    loadChildren: "./modules/access/access.module#AccessModule",
    // canActivate: [AuthService]
  },
  {
    path: "consumers",
    loadChildren: "./modules/consumers/consumers.module#ConsumersModule",
    canActivate: [AuthService]
  },
  {
    path: "branches",
    loadChildren: "./modules/branches/branches.module#BranchesModule",
    canActivate: [AuthService]
  },
  {
    path: "reports",
    loadChildren: "./modules/reports/reports.module#ReportsModule",
    canActivate: [AuthService]
  },
  {
    path: "settings",
    loadChildren: "./modules/settings/settings.module#SettingsModule",
    canActivate: [AuthService]
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
