import { Injectable } from "@angular/core";
import { AppService } from "../../shared/service/app.service";
import { HttpService } from "../../shared/service/http.service";
import { Storage } from "../../shared/utils/storage";
import { Props } from "../../common/props";
import { ApexService } from "../../shared/service/apex.service";

@Injectable()
export class BranchesService {

  private branch_url = "/branch";
  constructor(private http: HttpService, private appService: AppService) {}

  showMessage(message: string) {
    this.appService.showMessage(message);
  }
  getbranches(code: String) {
    return this.http.get(this.branch_url, { data: { name: code } });
  }
  save(data:any){
    return this.http.put(this.branch_url, {  data: data  });
  }
entity(id){
  return this.http.get(this.branch_url+'/'+id, null);
}
}
