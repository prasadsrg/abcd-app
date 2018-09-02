import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../entities/user";
import { Props } from "../../../../common/props";
import { AuthService } from "../../common/auth.service";
import { Storage } from "../../../../shared/utils/storage";

@Component({
  selector: "app-forgot-password-container",
  templateUrl: "./forgot-password.container.html"
})
export class ForgotPasswordContainer implements OnInit {
  auth: User;
  Props: any = Props;

  constructor(private authService: AuthService) {
    Storage.clearSession();
    this.auth = new User();
  }

  ngOnInit() {}
  ngAfterViewInit() {}

  resetPassword() {
    this.authService.forgotPassword(this.auth).subscribe((data: any) => {
      if (data) {
        this.authService.showMessage(data.message);
      }
      this.authService.navigateResetPassword(this.auth);
    });
  }
  back() {
    this.authService.navigateSignin();
  }
}
