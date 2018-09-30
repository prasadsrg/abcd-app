import { Injectable } from '@angular/core';
import { AppService } from "../../shared/service/app.service";
import { HttpService } from "../../shared/service/http.service";

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  private service_url = "/consumers";

  constructor(private http: HttpService, private appService: AppService) {}

  search(filter: any) {
    return this.http.post(this.service_url, { data: filter });
  }

  entityData(id: any) {
    return this.http.get(this.service_url, { data: { id: id } });
  }
}
