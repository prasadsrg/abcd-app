import { Component, OnInit } from "@angular/core";
import { User } from "../../../../entities/user";

@Component({
  selector: "app-reset-password-container",
  templateUrl: "./reset-password.container.html"
})
export class ResetPasswordContainer implements OnInit {
  auth: User;
  constructor() {}

  ngOnInit() {}
}
