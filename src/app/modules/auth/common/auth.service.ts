import { Injectable } from "@angular/core";
import { AppService } from "../../../shared/service/app.service";
import { HttpService } from "../../../shared/service/http.service";
import { Storage } from "../../../shared/utils/storage";
import * as decode from "jwt-decode";
import { Props } from "../../../common/props";
import { ApexService } from "../../../shared/service/apex.service";

@Injectable()
export class AuthService {
  private auth_url = "/auth";
  private access_menu_url = "/access_menu";
  private forgotPassword_url = "/auth/forgotpassword";
  private resetPassword_url = "/auth/resetpassword";
  constructor(
    private http: HttpService,
    private appService: AppService,
    private apexService: ApexService
  ) {}
  getParamUserId() {
    return this.appService.getParam("userId");
  }
  showMessage(message: string) {
    this.appService.showMessage(message);
  }
  login(data: any) {
    //data.grpcode = Storage.pid;
    let reqData = {
      username: data.username,
      password: data.password
    };
    return this.http.post(this.auth_url, reqData);
  }
  forgotPassword(data: any) {
    delete data.userId;
    data.grpcode = Storage.pid;
    this.appService.showLoader(true);
    return this.http.put(this.forgotPassword_url, { data: data });
  }
  resetPassword(data: any) {
    data.grpcode = Storage.pid;
    this.appService.showLoader(true);
    return this.http.put(this.resetPassword_url, { data: data });
  }
  storageSave(data: any) {
    if (data.access_token) {
      Storage.setJWT(data.access_token);
      data.user = decode(data.access_token).identity;
    }
    console.log(data);
    if (data.user) {
      Storage.setSessionUser(data.user);
      this.appService.sessionUserEmit(data.user);
    }
    if (data.menuList) {
      Storage.setMenuList(data.menuList);
      this.appService.menuEmit(data.menuList);
    } else {
      let role = data.user.role;
      this.http
        .post(this.access_menu_url, { data: { role: role } })
        .subscribe(respData => {
          Storage.setMenuList(respData);
          this.appService.menuEmit(respData);
        });
    }
    if (data.branchId) {
      Storage.setBranch(data.branchId);
    }
  }

  navigateDashBoard() {
    this.appService.navigate(Props.MENU.DASH_BOARD.link, []);
  }
  navigateForgotPassword() {
    this.appService.navigate(Props.MENU.FORGOT_PASSWORD.link, []);
  }
  navigateResetPassword(data: any) {
    this.appService.navigate(Props.MENU.RESET_PASSWORD.link, [
      { userId: data.email }
    ]);
  }
  navigateSignin() {
    this.appService.navigate(Props.MENU.SIGN_IN.link, []);
  }

  userMenuEmit() {
    this.appService.sessionUserEmit(null);
    this.appService.menuEmit(null);
  }
}