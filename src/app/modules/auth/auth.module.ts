import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { ForgotPasswordContainerComponent } from './containers/forgot-password-container/forgot-password-container.component';
import { ResetPasswordContainerComponent } from './containers/reset-password-container/reset-password-container.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginContainerComponent, ForgotPasswordContainerComponent, ResetPasswordContainerComponent]
})
export class AuthModule { }
