import { Component, OnInit,Input} from "@angular/core";
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

  ngOnInit() {
    this.authService.userMenuEmit();
  }
  ngAfterViewInit() {}

  forgotpassword() {
    this.authService.forgotPassword(this.auth).subscribe(data => {
      this.authService.storageSave(data);
      this.authService.navigateSignin();
    });
  }
  
}
