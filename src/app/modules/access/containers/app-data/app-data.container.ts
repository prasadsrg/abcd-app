import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { AccessService } from "../../access.service";
import { AppData } from '../../../../entities/appdata';


@Component({
  selector: "app-app-data-container",
  templateUrl: "./app-data.container.html"
})
export class AppDataContainer implements OnInit {
  codes:any=[];
  data:any=[];
  appData:any = new AppData();
  constructor(  private dataService: DataService,
    private accessService: AccessService) {
      let data='CODE'
      this.getAccsessData(data)
    }

  ngOnInit() {}
  getAccsessData(data){
    this.dataService.loadAccessData(data).subscribe((data:any)=>{
      this.codes = data;
    })
  }
  tabChange($event){
    this.accessService.getAppData($event.tab.textLabel).subscribe((data:any)=>{
      this.data = data;
    })
     console.log($event.tab.textLabel)
  }
  add(){
  
    this.data.push(this.appData)
    // console.log(this.data);
  }
  save(){
   this.accessService.save(this.data).subscribe((data:any)=>{
      this.accessService.showMessage(data.message)
   })
  }
}
