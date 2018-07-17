import { Component, OnInit } from "@angular/core";
import { User } from "../../../../entities/user";
import { AuthService } from "../../common/auth.service";
import { Storage } from "../../../../shared/utils/storage";

@Component({
  selector: "app-login-container",
  templateUrl: "./login-container.component.html",
  styleUrls: ["./login-container.component.scss"]
})
export class LoginContainerComponent implements OnInit {
  auth: User;

  constructor(private authService: AuthService) {
    Storage.clearSession();
    this.auth = new User();
  }

  ngOnInit() {
    this.authService.userMenuEmit();
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
