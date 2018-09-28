import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { AccessService } from "../../access.service";

@Component({
  selector: "app-access-menu-container",
  templateUrl: "./access-menu.container.html"
})
export class AccessMenuContainer implements OnInit {
  roles:any=[];
  data:any=[];
  constructor(
    private dataService: DataService,
    private accessService: AccessService
  ) {
 let data='ROLE'
    this.getAccsessData(data)
  }

  ngOnInit() {

  }
  getAccsessData(data){
    this.dataService.loadAccessData(data).subscribe((data:any)=>{
      this.roles = data;
    })
  }
  tabChange($event){
    this.accessService.getAccessMenu($event.tab.textLabel).subscribe((data:any)=>{
      this.data = data;
    })
     console.log($event.tab.textLabel)
  }
  save(){
   this.accessService.save(this.data).subscribe((data:any)=>{
      this.accessService.showMessage(data.message)
   })
  }
}
