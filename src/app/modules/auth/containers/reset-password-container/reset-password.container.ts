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
    // ResetPasswordForm.edit(this.myForm);
    // this.init();
  }

  ngOnInit() {
    this.authService.userMenuEmit();
  }
  ngAfterViewInit() {}
  // init() {
  //   this.auth = new User();
  //   this.auth.email = this.authService.getParamUserId();
  // }
  resetPassword(){
    this.authService.resetPassword(this.auth).subscribe( (data: any) => {
      this.authService.showMessage(data);
      this.authService.navigateSignin();
    })
  }
}
