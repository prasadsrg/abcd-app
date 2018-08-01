import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginContainer } from "./containers/login-container/login.container";
import { ForgotPasswordContainer } from "./containers/forgot-password-container/forgot-password.container";
import { ResetPasswordContainer } from "./containers/reset-password-container/reset-password.container";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginContainer },
  { path: "forgotpassword", component: ForgotPasswordContainer },
  { path: "resetpassword", component: ResetPasswordContainer }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
