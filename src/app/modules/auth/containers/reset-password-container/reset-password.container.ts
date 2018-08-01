import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../entities/user";
import { Props } from "../../../../common/props";

@Component({
  selector: "app-reset-password-container",
  templateUrl: "./reset-password.container.html"
})
export class ResetPasswordContainer implements OnInit {
  Props: any = Props;
  @Input() auth: User;
  constructor() {}

  ngOnInit() {}
}
