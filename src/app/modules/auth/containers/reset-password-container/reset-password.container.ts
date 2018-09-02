import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../entities/user";
import { Props } from "../../../../common/props";
import { AuthService } from "../../common/auth.service";
import { Storage } from "../../../../shared/utils/storage";

@Component({
  selector: "app-reset-password-container",
  templateUrl: "./reset-password.container.html"
})
export class ResetPasswordContainer implements OnInit {
  auth: User;
  Props: any = Props;
  constructor(private authService: AuthService) {
    Storage.clearSession();
    this.auth = new User();
  }

  ngOnInit() {
    this.auth = new User();
    this.auth.userid = this.authService.getParamUserId();
    this.auth.vid = this.authService.getParamVID();
  }
  ngAfterViewInit() {}
  // init() {

  // }
  resetPassword() {
    this.authService.resetPassword(this.auth).subscribe((data: any) => {
      if (data) {
        this.authService.showMessage(data.message);
      }
      this.authService.navigateSignin();
    });
  }
}
