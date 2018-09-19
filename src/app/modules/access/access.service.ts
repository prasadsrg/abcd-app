import { Injectable } from "@angular/core";
import { AppService } from "../../shared/service/app.service";
import { HttpService } from "../../shared/service/http.service";
import { Storage } from "../../shared/utils/storage";
import { Props } from "../../common/props";
import { ApexService } from "../../shared/service/apex.service";

@Injectable()
export class AccessService {
  private service_url = "/access";

  constructor(private http: HttpService, private appService: AppService) {}

  showMessage(message: string) {
    this.appService.showMessage(message);
  }
}