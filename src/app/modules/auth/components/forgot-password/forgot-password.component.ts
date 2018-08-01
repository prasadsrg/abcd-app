import { Component, OnInit, Input } from "@angular/core";
import { Props } from "../../../../common/props";
import { User } from "../../../../entities/user";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  Props: any = Props;
  @Input() auth: User;

  constructor() {}

  ngOnInit() {}
}
