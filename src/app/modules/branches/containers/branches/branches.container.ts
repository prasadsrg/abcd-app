import { Component, OnInit } from "@angular/core";
import { BranchesService } from '../../branches.service';
import { AppService } from '../../../../shared/service/app.service';



@Component({
  selector: "app-branches-container",
  templateUrl: "./branches.container.html"
})

export class BranchesContainer implements OnInit {
  name : any = 'abcd';
  dataList:any=[];
  constructor(private branchesService:BranchesService,private appService:AppService) {
    this.search()
  }

  ngOnInit() {}
  search() {
    this.branchesService.getbranches(null).subscribe((dataList: any[]) => {
      this.dataList = dataList;
    });
  }
  editItem($event){
  this.appService.navigate('/branches/branches-edit',[{'id':$event.id}])
  }
}

