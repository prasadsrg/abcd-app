import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthService } from "./shared/service/auth.service";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "welcome" },
  {
    path: "welcome",
    loadChildren: "./modules/welcome/welcome.module#WelcomeModule"
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
