import { Injectable } from "@angular/core";
import { AppService } from "../../shared/service/app.service";
import { HttpService } from "../../shared/service/http.service";
import { Storage } from "../../shared/utils/storage";
import { Props } from "../../common/props";
import { ApexService } from "../../shared/service/apex.service";

@Injectable()
export class AccessService {
  private service_url = "/access";
  private access_menu_url = "/access_menu";
  private app_data_url = "/app_data";
  constructor(private http: HttpService, private appService: AppService) {}

  showMessage(message: string) {
    this.appService.showMessage(message);
  }
  getAccessMenu(code: String) {
    return this.http.post(this.access_menu_url, { data: { role: code } });
  }
  save(data:any){
    return this.http.put(this.access_menu_url, {  data: data  });
  }
  getAppData(code: String) {
    return this.http.post(this.app_data_url, { data: { code: code } });
  }
}
