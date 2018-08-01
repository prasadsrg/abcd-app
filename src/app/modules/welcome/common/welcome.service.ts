import { Injectable } from "@angular/core";
import { AppService } from "../../../shared/service/app.service";
import { HttpService } from "../../../shared/service/http.service";
import { Storage } from "../../../shared/utils/storage";
import { Props } from "../../../common/props";
import { ApexService } from "../../../shared/service/apex.service";

@Injectable()
export class WelcomeService {
  constructor(
    private http: HttpService,
    private appService: AppService,
    private apexService: ApexService
  ) {}

  showMessage(message: string) {
    this.appService.showMessage(message);
  }

  navigateSignin() {
    this.appService.navigate(Props.MENU.SIGN_IN.link, []);
  }
}
