import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../material.module";
import { SharedModule } from "../../shared/shared.module";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeViewComponent } from "./views/welcome-view.component";
import { WelcomeNewsComponent } from "./components/welcome-news/welcome-news.component";

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, WelcomeRoutingModule],
  declarations: [WelcomeViewComponent, WelcomeNewsComponent]
})
export class WelcomeModule {}
