import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../entities/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @Input() myForm: any;
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
