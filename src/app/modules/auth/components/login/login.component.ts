import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../entities/user";
import { ControlContainer, NgForm } from "@angular/forms";
import { Props } from "../../../../common/props";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LoginComponent implements OnInit {
  // @Input() myForm: any;
  Props: any = Props;
  @Input() auth: User;

  showorhide: string;
  isVisible: string;
  constructor() {
    this.showorhide = "password";
    this.isVisible = "show";
  }

  ngOnInit() {}
  showPassword() {
    this.showorhide = "password";
    this.isVisible = "show";
  }
  hidePassword() {
    this.showorhide = "text";
    this.isVisible = "hide";
  }
}
