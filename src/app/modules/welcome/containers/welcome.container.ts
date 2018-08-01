import { Component, OnInit } from "@angular/core";
import { WelcomeService } from "../common/welcome.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.container.html"
})
export class WelcomeContainer implements OnInit {
  constructor(private welcomeService: WelcomeService) {}

  ngOnInit() {}

  login() {
    this.welcomeService.navigateSignin();
  }
}
