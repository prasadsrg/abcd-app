import { Component, OnInit } from "@angular/core";
import { User } from "../../../../entities/user";

@Component({
  selector: "app-forgot-password-container",
  templateUrl: "./forgot-password.container.html"
})
export class ForgotPasswordContainer implements OnInit {
  auth: User;
  constructor() {}

  ngOnInit() {}
}
