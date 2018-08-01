import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../material.module";
import { SharedModule } from "../../shared/shared.module";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeContainer } from "./containers/welcome.container";
import { WelcomeNewsComponent } from "./components/welcome-news/welcome-news.component";
import { WelcomeService } from "./common/welcome.service";

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, WelcomeRoutingModule],
  declarations: [WelcomeContainer, WelcomeNewsComponent],
  providers: [WelcomeService]
})
export class WelcomeModule {}
