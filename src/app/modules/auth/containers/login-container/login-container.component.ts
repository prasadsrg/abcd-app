import { Component, OnInit } from "@angular/core";
import { User } from "../../../../entities/user";
import { LoginForm } from "../../common/login.form";
import { AuthService } from "../../common/auth.service";

@Component({
  selector: "app-login-container",
  templateUrl: "./login-container.component.html",
  styleUrls: ["./login-container.component.scss"]
})
export class LoginContainerComponent implements OnInit {
  myForm: any = LoginForm.init();
  auth: User;

  constructor(private authService: AuthService) {
    this.auth = new User();
  }

  ngOnInit() {
    LoginForm.edit(this.myForm);
  }
  ngAfterViewInit() {}

  signIn() {
    this.authService.login(this.auth).subscribe(data => {
      this.authService.storageSave(data);
      this.authService.navigateDashBoard();
    });
  }
  forgotPassword() {
    this.authService.navigateForgotPassword();
  }
}
