import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginContainerComponent } from "./containers/login-container/login-container.component";
import { ForgotPasswordContainerComponent } from "./containers/forgot-password-container/forgot-password-container.component";
import { ResetPasswordContainerComponent } from "./containers/reset-password-container/reset-password-container.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginContainerComponent },
  { path: "forgotpassword", component: ForgotPasswordContainerComponent },
  { path: "resetpassword", component: ResetPasswordContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
