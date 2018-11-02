import { Component, OnInit } from "@angular/core";
import { WelcomeService } from "../common/welcome.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.container.html"
})
export class WelcomeContainer implements OnInit {
  siginNav: boolean = false;
  sigupNav: boolean = false;
  forgotPasswordNav: boolean = false;
  resetNav: boolean = false;
  constructor(private welcomeService: WelcomeService) {}

  ngOnInit() {}

  login() {
    this.welcomeService.navigateSignin();
  }
  closeAllNav() {
    this.siginNav = false;
    this.sigupNav = false;
    this.forgotPasswordNav = false;
    this.resetNav = false;
  }
}
