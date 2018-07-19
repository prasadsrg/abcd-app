import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../material.module";
import { SharedModule } from "../../shared/shared.module";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginContainerComponent } from "./containers/login-container/login-container.component";
import { ForgotPasswordContainerComponent } from "./containers/forgot-password-container/forgot-password-container.component";
import { ResetPasswordContainerComponent } from "./containers/reset-password-container/reset-password-container.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { AuthService } from "./common/auth.service";

@NgModule({
  imports: [CommonModule, AuthRoutingModule, MaterialModule, SharedModule],
  declarations: [
    LoginContainerComponent,
    ForgotPasswordContainerComponent,
    ResetPasswordContainerComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  providers: [AuthService]
})
export class AuthModule {}
