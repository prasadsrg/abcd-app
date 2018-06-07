import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../material.module";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomePageComponent } from "./pages/welcome-page.component";

@NgModule({
  imports: [CommonModule, MaterialModule, WelcomeRoutingModule],
  declarations: [WelcomePageComponent]
})
export class WelcomeModule {}
