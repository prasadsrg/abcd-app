import { Injectable } from "@angular/core";
import { AppService } from "../shared/service/app.service";
import { HttpService } from "../shared/service/http.service";
import { Storage } from "../shared/utils/storage";
import { Props } from "../common/props";
import { ApexService } from "../shared/service/apex.service";

@Injectable()
export class DataService {
  private access_service_url = "/access_data";
  private service_url = "/data_load";

  constructor(private http: HttpService, private appService: AppService) {}

  /**
   * common
   */

  loadAccessData(code: String) {
    return this.http.post(this.access_service_url, { data: { code: code } });
  }

  loadData(code: String, key?: String, param?: String) {
    let reqData = {
      code: code,
      key: key,
      param: param
    };
    return this.http.post(this.service_url, { data: { code: code } });
  }

  navParam(key: string) {
    return this.appService.getParam(key);
  }

  showMessage(message: string) {
    this.appService.showMessage(message);
  }

  /**
   * navigate
   */
  navigateDashBoard(params: any) {
    this.appService.navigate(Props.MENU.DASHBOARD.link, params);
  }
  navigateSignin(params: any) {
    this.appService.navigate(Props.MENU.SIGN_IN.link, params);
  }
  navigateForgotPassword(params: any) {
    this.appService.navigate(Props.MENU.FORGOT_PASSWORD.link, params);
  }
  navigateResetPassword(params: any) {
    this.appService.navigate(Props.MENU.RESET_PASSWORD.link, params);
  }

  /**
   * load
   */

  loadCodes() {
    return this.loadData("codes");
  }

  loadRoles() {
    return this.loadData("roles");
  }

  loadBranches() {
    return this.loadData("branches");
  }
}
