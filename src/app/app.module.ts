import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";
import { AppdRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ApexService } from "./shared/service/apex.service";
import { AuthService } from "./shared/service/auth.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    AppdRoutingModule,
    MaterialModule,
    SharedModule.forRoot()
  ],
  providers: [ApexService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
