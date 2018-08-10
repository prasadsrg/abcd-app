import { Component, OnInit, Input } from "@angular/core";
import { Props } from "../../../../common/props";
import { User } from "../../../../entities/user";
import { ControlContainer, NgForm } from "@angular/forms";


@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
  
})
export class ForgotPasswordComponent implements OnInit {
  @Input() auth: User;
  showorhide: string;
  isVisible: string;
  error: any;
  Props: any = Props;

  constructor() {}

  ngOnInit() {}
}
