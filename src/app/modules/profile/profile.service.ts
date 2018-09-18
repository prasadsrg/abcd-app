import { Injectable } from "@angular/core";
import { AppService } from "../../shared/service/app.service";
import { HttpService } from "../../shared/service/http.service";
import { Storage } from "../../shared/utils/storage";
import { Props } from "../../common/props";
import { ApexService } from "../../shared/service/apex.service";

@Injectable()
export class ProfileService {
  private service_url = "/profile";

  constructor(private http: HttpService, private appService: AppService) {}

  search(filter: any) {
    return this.http.post(this.service_url, { data: filter });
  }

  entityData(id: any) {
    return this.http.get(this.service_url, { data: { id: id } });
  }
}
